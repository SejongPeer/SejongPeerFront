import { useEffect, useState } from "react";
import style from "./InputTextBox.module.css";

const InputTextBox = (props) => {
  const [inputNum, setInputNum] = useState(false);
  //const [birthNum, setBirthNum] = useState("");
  const isPWD = props.id === "pwd" || props.id === "pwdCheck";
  const isAuthData = props.id === "studentNum" || props.id === "grade" || props.id === "name";


  // console.log("아이디 : ", props.id, "확인 ", isAuthData);

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
      console.log("User ID 입력 값:", inputValue); // 사용자 입력 값을 콘솔에 출력
      props.idData(inputValue);
      console.log(props.idValue);
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
      //패스워드 확인
    } else if (props.id === "pwdCheck") {
      props.pwdCheckData(inputValue);
      //props.pwdCheckData(event.target.value); // 상태 업데이트

      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
      console.log(inputValue);
      console.log(props.pwdValue);
      if (inputValue !== props.pwdValue) {
        props.errorHandler("동일하게 비밀번호를 입력해 주세요");
      } else if (!regex.test(inputValue)) {
        props.errorHandler("* 비밀번호는 영어와 숫자를 모두 포함해야 합니다.");
      } else if (inputValue.length < 10) {
        props.errorHandler("* 비밀번호는 10자이상으로 작성해주세요");
      } else {
        props.errorHandler(""); // 에러 메시지를 지웁니다.
      }
    }//이름
    else if (props.id === "name") {
      props.nameData(inputValue);
    }//학번 
    else if (props.id === "studentNum") {
      props.studentNumData(inputValue);
      // if (inputValue.length < 2) {
      //   props.errorHandler("* 학번은 2자로 작성해주세요");
      // } else if (inputValue.length === 2) {
      //   props.errorHandler("");
      // } else {
      //   props.errorHandler("* 학번은 2자로 작성해주세요");
      // }
      //학년
    } else if (props.id === "grade") {
      console.log("학년 입력 값:", inputValue); // 사용자 입력 값을 콘솔에 출력
      props.gradeData(inputValue);
      // if (inputValue.length < 1) {
      //   props.errorHandler("* 학년은 1자로 작성해주세요");
      // } else if (inputValue.length === 1) {
      //   props.errorHandler("");
      // } else {
      //   props.errorHandler("* 학번은 1자로 작성해주세요");
      // }
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
      }//성별    
    } else if (props.id === "gender") {
      props.genderData(inputValue);
    }//단과대
    else if (props.id === "major") {
      props.majorData(inputValue);
    }//학과
    else if (props.id === "college") {
      props.collegeData(inputValue);
    }//(복수전공)단과대
    else if (props.id === "double_major") {
      props.doublemajorData(inputValue);
    }//(복수전공)학과 
    else if (props.id === "double_college") {
      props.doubleCollegeData(inputValue);
    }
    else {
      console.log("Unhandled input type: ", props.id);
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

  // useEffect(() => {
  //   // 비밀번호와 비밀번호 확인 필드의 값이 변경될 때마다 실행
  //   if (props.pwdValue && props.pwdCheckValue) {
  //     if (props.pwdValue !== props.pwdCheckValue) {
  //       // 비밀번호와 비밀번호 확인이 다를 경우, 에러 메시지를 표시
  //       props.errorHandler("동일하게 비밀번호를 입력해 주세요");
  //       console.log(props.pwdValue);
  //     } else {
  //       // 비밀번호와 비밀번호 확인이 동일할 경우, 에러 메시지를 제거
  //       props.errorHandler("");
  //     }
  //   }
  // }, [props.pwdValue, props.pwdCheckValue, props.errorHandler]); // 의존성 배열에는 비밀번호, 비밀번호 확인 값과 에러 핸들링 함수를 포함


  return (
    <div className={style.relative}>
      {inputNum ? (
        <input
          className={style.inputText}
          placeholder={props.name}
          onKeyDown={handleKeyPress}//숫자가 아닌 입력 방지
          onChange={inputHandler}
          disabled={isAuthData}
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
          disabled={isAuthData}
        />
      )}
    </div>
  );
};

export default InputTextBox;
