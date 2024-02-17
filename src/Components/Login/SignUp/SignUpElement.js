import { useEffect, useState } from "react";
import InputTextBox from "./InputTextBox";

import style from "./SignUpElement.module.css";
import EmailBox from "./EmailBox";
import GenderSignUp from "./GenderSignUp";
import MajorSignUp from "./MajorSignUp";
import IDCheckBox from "./IDCheckBox";
import NickNameBox from "./NickNameBox";

const SignUpElement = (props) => {
  const [isEmail, setIsEmail] = useState(false);
  const [isError, setIsError] = useState("");
  const [isID, setIsID] = useState(false);
  const [isNickname, setIsNickname] = useState(false);


  const isGender = props.id === "gender";
  const isMajor = props.id === "major";
  const isDoubleMajor = props.id === "double_major";

  const errorHandler = (error) => {
    setIsError(error);
    props.signUpErrorHandler(error);
  };

  useEffect(() => {
    if (props.id === "email") {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  }, [props.id]);

  useEffect(() => {
    setIsNickname(props.id === "nickname"); // 닉네임 필드 식별
    setIsID(props.id === "userId");
    setIsEmail(props.id === "email");
  }, [props.id]);

  return (
    <div className={style.container}>
      {props.id !== "check" && <p className={style.title}>{props.title}</p>}

      {isNickname ? (
        <NickNameBox
          id={props.id}
          name={props.name}
          value={props.nickNameData} // 수정: 닉네임 데이터를 올바르게 전달
          errorHandler={errorHandler}
          idData={props.idData} // 닉네임 데이터를 상위 컴포넌트로 전달하는 함수
        />
      ) : isID ? (
        <IDCheckBox
          id={props.id}
          name={props.name}
          idData={props.userid}
          errorHandler={errorHandler}
        />
      ) : isEmail ? (
        <EmailBox
          id={props.id}
          name={props.name}
          emailData={props.emailData}
          errorHandler={errorHandler}
        />
      ) : isGender ? (
        <GenderSignUp
          id={props.id}
          name={props.name}
          genderData={props.genderData}
        />
      ) : isMajor ? (
        <MajorSignUp
          id={props.id}
          name={props.name}
          majorData={props.majorData}
          collegeData={props.collegeData}
        />
      ) : isDoubleMajor ? (
        <MajorSignUp
          id={props.id}
          name={props.name}
          doublemajorData={props.doublemajorData}
          doubleCollegeData={props.doubleCollegeData}
        />
      ) :
        (
          <InputTextBox
            //id={props.id}
            name={props.name}
            errorHandler={errorHandler}
            //idData={props.idData}
            pwdData={props.pwdData}
            nameData={props.nameData}
            birthData={props.birthData}
            kakaoData={props.kakaoData}
            phoneNumData={props.phoneNumData}
            studentNumData={props.studentNumData}
            gradeData={props.gradeData}
          />
        )}

      {isError && <p className={style.error}>{isError}</p>}
    </div>
  );
};

export default SignUpElement;
