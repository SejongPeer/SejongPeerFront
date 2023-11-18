import { useEffect, useState } from "react";
import style from "./InputTextBox.module.css";

const InputTextBox = (props) => {
  const [inputNum, setInputNum] = useState(false);
  const [birthNum, setBirthNum] = useState("");
  const isPWD = props.id === "pwd";

  function handleKeyPress(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  const inputHandler = (event) => {
    let inputValue = event.target.value;

    //ID
    if (props.id === "userId") {
      props.idData(inputValue);

      if (inputValue.length >= 8) {
        props.errorHandler("");
      } else {
        props.errorHandler("* 아이디는 8자 이상 작성해주세요");
      }

      //PWD
    } else if (props.id === "pwd") {
      props.pwdData(inputValue);

      // 영어와 숫자를 모두 포함하는지 확인하는 정규 표현식
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

      if (inputValue.length >= 10) {
        if (regex.test(inputValue)) {
          props.errorHandler("");
        } else {
          props.errorHandler(
            "* 비밀번호는 영어와 숫자를 모두 포함해야 합니다."
          );
        }
      } else {
        props.errorHandler("* 비밀번호는 10자이상으로 작성해주세요");
      }

      //Name
    } else if (props.id === "name") {
      props.nameData(inputValue);

      //Birth
    } else if (props.id === "birth") {
      console.log("Original Input:", inputValue);
      let b = inputValue.replace(/[^0-9]/g, "");
      console.log("Original Input:1111", b);
      props.birthData(b);

      if (b.length < 8) {
        props.errorHandler("* 생년월일은 8자로 작성해주세요");
      } else if (b.length === 8) {
        props.errorHandler("");
      } else if (b.length > 8) {
        props.errorHandler("* 생년월일은 8자로 작성해주세요");
        event.preventDefault();
      }

      //Kakaoid
    } else if (props.id === "kakaoid") {
      props.kakaoData(inputValue);

      //PhoneNum
    } else if (props.id === "phoneNum") {
      props.phoneNumData(inputValue);

      if (inputValue.includes("-")) {
        props.errorHandler("* 하이픈(-)은 빼고 작성해주세요");
      } else {
        if (inputValue.length < 11) {
          props.errorHandler("* 전화번호는 11자리로 입력해주세요");
        } else if (inputValue.length === 11) {
          props.errorHandler("");
        } else if (inputValue.length > 11) {
          props.errorHandler("* 전화번호는 11자리로 입력해주세요");
          event.preventDefault();
        }
      }

      //StudentNum
    } else if (props.id === "studentNum") {
      props.studentNumData(inputValue);

      if (inputValue.length < 2) {
        props.errorHandler("* 학번은 2자로 작성해주세요");
      } else if (inputValue.length === 2) {
        props.errorHandler("");
      } else {
        props.errorHandler("* 학번은 2자로 작성해주세요");
      }
    } else if (props.id === "grade") {
      props.gradeData(inputValue);
      if (inputValue.length < 1) {
        props.errorHandler("* 학년은 1자로 작성해주세요");
      } else if (inputValue.length === 1) {
        props.errorHandler("");
      } else {
        props.errorHandler("* 학번은 1자로 작성해주세요");
      }
    }
  };

  useEffect(() => {
    if (
      props.id === "birth" ||
      props.id === "phoneNum" ||
      props.id === "studentNum"
    ) {
      setInputNum(true);
    } else {
      setInputNum(false);
    }
  }, [props.id]);

  return (
    <div className={style.relative}>
      {inputNum ? (
        <input
          className={style.inputText}
          placeholder={props.name}
          onKeyDown={handleKeyPress}
          onChange={inputHandler}
        />
      ) : isPWD ? (
        <input
          className={style.inputText}
          type="password"
          placeholder={props.name}
          onChange={inputHandler}
        />
      ) : (
        <input
          className={style.inputText}
          placeholder={props.name}
          onChange={inputHandler}
        />
      )}
    </div>
  );
};

export default InputTextBox;
