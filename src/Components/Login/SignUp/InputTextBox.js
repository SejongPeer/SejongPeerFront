import { useEffect, useState } from "react";
import style from "./InputTextBox.module.css";

const InputTextBox = (props) => {
  const [inputNum, setInputNum] = useState(false);
  //const [birthNum, setBirthNum] = useState("");
  const isPWD = props.id === "pwd" && "pwdCheck";

  function handleKeyPress(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault(); 
    }
  }

  const inputHandler = (event) => {
    let inputValue = event.target.value;
    //아이디
    if (props.id === "userId") {
      props.idData(inputValue);
      if (inputValue.length >= 8) {
        props.errorHandler("");
      } else {
        props.errorHandler("* 아이디는 8자 이상 작성해주세요");
      }
    //패스워드 
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
    } else if (props.id === "pwdCheck") {
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
      props.pwdCheckData(inputValue);
    }//이름
    else if (props.id === "name") {
      props.nameData(inputValue);
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
    }//학년 
    else if (props.id === "grade") {
      props.gradeData(inputValue);
    }//닉네임 
    else if (props.id === "nickname") {
      props.nickNameData(inputValue);
    }//카카오아이디 
    else if (props.id === "kakaoid") {
      props.kakaoData(inputValue);
    }//전화번호 
    else if (props.id === "phoneNum") {
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
      }    } else if (props.id === "gender") {
      props.genderData(inputValue);
    }//학부 
    else if (props.id === "major") {
      props.majorData(inputValue);
    }//전공 
    else if (props.id === "college") {
      props.collegeData(inputValue);
    }//(복수전공)학부 
    else if (props.id === "double_major") {
      props.doublemajorData(inputValue);
    }//(복수전공)전공 
    else if (props.id === "double_college") {
      props.doubleCollegeData(inputValue);
    } 
    else {
      console.warn("Unhandled input type: ", props.id);
    }
  };

  useEffect(() => {//숫자
    if (
      props.id === "phoneNum" ||
      props.id === "studentNum" ||
      props.id === "grade"
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
          onKeyDown={handleKeyPress}//숫자가 아닌 입력 방지
          onChange={inputHandler}
        />
      ) : isPWD ? (//패스워드입력
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
