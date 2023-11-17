import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignUpElement from "./SignUpElement";

import style from "./SignUp.module.css";

const SignUp = () => {
  const [idValue, setIdValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [birthValue, setBirthValue] = useState("");
  const [kakaoidValue, setKakaoValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [majorValue, setMajorValue] = useState("");
  const [studentNumberValue, setStudentNumberValue] = useState("");
  const [gradeValue, setGradeValue] = useState("");

  const [error, setError] = useState("가입완료 되었습니다.");

  const navigate = useNavigate();

  const signUpErrorHandler = (error) => {
    setError(error);
    if (error === "") {
      setError("가입완료 되었습니다.");
    }
  };

  const idData = (userId) => {
    setIdValue(userId);
  };
  const pwdData = (userPwd) => {
    setPwdValue(userPwd);
  };
  const emailData = (userEmail) => {
    setEmailValue(userEmail);
  };
  const nameData = (userName) => {
    setNameValue(userName);
  };
  const birthData = (userBirth) => {
    setBirthValue(userBirth);
  };
  const kakaoData = (userKakaoId) => {
    setKakaoValue(userKakaoId);
  };

  const phoneNumData = (userPhoneNum) => {
    setPhoneNumberValue(userPhoneNum);
  };
  const genderData = (userGender) => {
    setGenderValue(userGender);
  };

  const majorData = (userMajor) => {
    setMajorValue(userMajor);
  };

  const gradeData = (userGrade) => {
    setGradeValue(userGrade);
  };

  const studentNumData = (userStudentNum) => {
    setStudentNumberValue(userStudentNum);
  };

  //POST
  async function submitHandler(e) {
    console.log("-------------------------------");
    console.log("idValue : " + idValue);
    console.log("pwdValue : " + pwdValue);
    console.log("emailValue : " + emailValue);
    console.log("nameValue : " + nameValue);
    console.log("birthValue : " + birthValue);
    console.log("kakaoidValue : " + kakaoidValue);
    console.log("phoneNumberValue : " + phoneNumberValue);
    console.log("genderValue : " + genderValue);
    console.log("majorValue : " + majorValue);
    console.log("studentNumberValue : " + studentNumberValue);
    console.log("gradeValue : " + gradeValue);

    if (
      idValue === "" ||
      pwdValue === "" ||
      emailValue === "" ||
      nameValue === "" ||
      birthValue === "" ||
      kakaoidValue === "" ||
      phoneNumberValue === "" ||
      genderValue === "" ||
      majorValue === "" ||
      studentNumberValue === "" ||
      gradeValue === ""
    ) {
      alert("모든 양식의 작성을 완료해주세요");
      e.preventDefault();
    } else {
      if (error === "가입완료 되었습니다.") {
        const join = {
          username: idValue,
          password: pwdValue,
          email: emailValue,
          koreanName: nameValue,
          birthday: birthValue,
          kakaoId: kakaoidValue,
          phoneNumber: phoneNumberValue,
          gender: genderValue,
          major: majorValue,
          studentNumber: studentNumberValue,
          grade: gradeValue,
        };

        try {
          const response = await fetch(
            process.env.REACT_APP_BACK_SERVER + "/user/join",
            {
              method: "POST",
              body: JSON.stringify(join),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log("11" + data);

          if (!response.ok) {
            throw new Error(data.message);
          }
          alert(data.message + " 로그인 페이지로 이동합니다.");
          navigate("/login");
        } catch (err) {
          console.error("Error occurred:", err);
          console.log(err.message);
          alert(
            "제출에 실패했습니다. 다시 시도해주세요. (에러 내용: " +
              err.message +
              ")"
          );
          e.preventDefault();
        }
      } else {
        alert(error);
        e.preventDefault();
      }
    }
  }

  return (
    <div className={style.container}>
      <h2 className={style.h2}>회원가입</h2>
      <div className={style.form}>
        <SignUpElement
          id="userId"
          title="아이디(8자 이상)"
          name="아이디 입력"
          idData={idData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <SignUpElement
          id="pwd"
          title="비밀번호(10자이상의 영문, 숫자)"
          name="비밀번호 입력"
          pwdData={pwdData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <SignUpElement
          id="email"
          title="세종대학교 이메일 (@sju.ac.kr 앞부분 작성)"
          name="학교 이메일 입력"
          emailData={emailData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <SignUpElement
          id="name"
          title="이름"
          name="이름 입력"
          nameData={nameData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <SignUpElement
          id="birth"
          title="생년월일 (8자리 ex : 20230101)"
          name="생년월일 8자리 숫자만 입력"
          birthData={birthData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <SignUpElement
          id="kakaoid"
          title="카카오톡 아이디"
          name="카카오톡 아이디 입력"
          kakaoData={kakaoData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <SignUpElement
          id="phoneNum"
          title="전화번호"
          name="전화번호 -없이 입력"
          phoneNumData={phoneNumData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <SignUpElement
          id="gender"
          title="성별"
          name="준비중"
          genderData={genderData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <SignUpElement
          id="major"
          title="단과대/학과"
          name="단과대/학과 선택"
          majorData={majorData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <SignUpElement
          id="studentNum"
          title="학번"
          name="학번입력 (ex: 22)"
          studentNumData={studentNumData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <SignUpElement
          id="grade"
          title="학년"
          name="학년입력 (ex: 1)"
          studentNumData={gradeData}
          signUpErrorHandler={signUpErrorHandler}
        />
        <button
          type="submit"
          className={style.submitBtn}
          onClick={submitHandler}
        >
          가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUp;
