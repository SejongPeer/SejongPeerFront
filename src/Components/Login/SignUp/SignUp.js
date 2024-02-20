import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import SignUpElement from "./SignUpElement";
import style from "./SignUp.module.css";
import { MyContext } from "../../../App";

const SignUp = () => {

  const { name, setName } = useContext(MyContext);
  const { studentNum, setStudentNum } = useContext(MyContext);
  const { grade, setGrade } = useContext(MyContext);

  const [idValue, setIdValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");
  const [pwdCheckValue, setPwdCheckValue] = useState("");  //비밀번호 확인 추가

  const [nameValue, setNameValue] = useState(name);
  const [studentNumberValue, setStudentNumberValue] = useState("");
  const [gradeValue, setGradeValue] = useState("");

  const [nicknameValue, setNicknameValue] = useState("");
  const [kakaoidValue, setKakaoValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [collegeValue, setCollegeValue] = useState("");
  const [majorValue, setMajorValue] = useState("");
  const [doublemajorValue, setDoubleMajorValue] = useState("");
  const [doubleCollegeValue, setDoubleCollegeValue] = useState("");
  //const [emailValue, setEmailValue] = useState("");
  //const [birthValue, setBirthValue] = useState("");

  const [error, setError] = useState("가입완료 되었습니다.");
  const [step, setStep] = useState(1);
  const [fadeEffect, setFadeEffect] = useState('');
  const [doubleMajorChecked, setDoubleMajorChecked] = useState(false); // Checkbox state for 복수/부전공


  const navigate = useNavigate();

  const signUpErrorHandler = (error) => {
    setError(error);
    if (error === "") {
      setError("가입완료 되었습니다.");
    }
  };

  const nextStepHandler = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const gradeData = (userData) => {
    setGradeValue(userData);
  };

  const idData = (userId) => {
    setIdValue(userId);
  };
  const pwdData = (userPwd) => {
    setPwdValue(userPwd);
  };
  const pwdCheckData = (userPwd) => {
    setPwdCheckValue(userPwd);
  };

  const nameData = (userName) => {
    setNameValue(userName);
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

  const collegeData = (userCollege) => {
    setCollegeValue(userCollege);
  };

  const majorData = (userMajor) => {
    setMajorValue(userMajor);
  };

  const doublemajorData = (userDoubleMajor) => {
    setDoubleMajorValue(userDoubleMajor);
  };//복수전공데이터추가

  const doubleCollegeData = (userDoubleCollege) => {
    setDoubleCollegeValue(userDoubleCollege);
  }
  const studentNumData = (userStudentNum) => {
    setStudentNumberValue(userStudentNum);
  };

  const nickNameData = (userNickName) => {
    setNicknameValue(userNickName);
  }//추가
  // const emailData = (userEmail) => {
  //   setEmailValue(userEmail);
  // };
  // const birthData = (userBirth) => {
  //   setBirthValue(userBirth);
  // };


  //POST
  async function submitHandler(e) {
    console.log("-------------------------------");
    console.log("idValue : " + idValue);
    console.log("pwdValue : " + pwdValue);
    console.log("pwdCheckValue : " + pwdCheckValue);
    console.log("nameValue : " + nameValue);
    console.log("studentNumberValue : " + studentNumberValue);
    console.log("gradeValue : " + gradeValue);

    console.log("nicknameValue : " + nicknameValue);
    console.log("kakaoidValue : " + kakaoidValue);
    console.log("phoneNumberValue : " + phoneNumberValue);
    console.log("genderValue : " + genderValue);
    console.log("collegeValue : " + collegeValue);
    console.log("majorValue : " + majorValue);
    console.log("doublemajorValue : " + doublemajorValue);
    console.log("doubleCollegeValue : " + doubleCollegeValue);

    //console.log("emailValue : " + emailValue);
    //console.log("birthValue : " + birthValue);

    if (
      idValue === "" ||
      pwdValue === "" ||
      pwdCheckValue === "" ||
      nameValue === "" ||
      studentNumberValue === "" ||
      gradeValue === "" ||

      nicknameValue === "" ||
      kakaoidValue === "" ||
      phoneNumberValue === "" ||
      genderValue === "" ||
      collegeValue === "" ||
      majorValue === ""
      // doublemajorValue === "" || 얘네는 선택사항
      // doubleCollegeValue === ""
      //emailValue === "" ||
      //birthValue === "" ||
    ) {
      alert("모든 양식의 작성을 완료해주세요");
      e.preventDefault();
    } else {
      if (error === "가입완료 되었습니다.") {
        let join = {
          account: idValue,
          password: pwdValue,
          passwordCheck: pwdCheckValue,
          name: nameValue,
          studentId: studentNumberValue,
          college: collegeValue,
          major: majorValue,
          subCollege: doubleCollegeValue,
          subMajor: doublemajorValue,
          grade: gradeValue,
          gender: genderValue,
          phoneNumber: phoneNumberValue,
          nickname: nicknameValue,
          kakaoAccount: kakaoidValue,

          //email: emailValue,
          //birthday: birthValue,
        };

        try {
          const response = await fetch(
            process.env.REACT_APP_BACK_SERVER + "/member/sign-up",
            {
              method: "POST",
              body: JSON.stringify(join),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log(data);
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
      <h2 className={style.h2}>기본정보</h2>
      <div className={`${style.form} ${fadeEffect}`}>
        {step === 1 && (
          <>
            <SignUpElement id="userId" title="아이디 입력" name="아이디 입력" idData={idData} signUpErrorHandler={signUpErrorHandler} />
            <div className="special-gap">
              <SignUpElement id="pwd" title="비밀번호(10자이상의 영문, 숫자)" name="비밀번호 입력" pwdData={pwdData} signUpErrorHandler={signUpErrorHandler} />
            </div>
            <div className="special-gap">
              <SignUpElement id="pwdCheck" name="비밀번호 확인" pwdCheckData={pwdCheckData} signUpErrorHandler={signUpErrorHandler} />
            </div>
            <SignUpElement id="name" title="이름" name={name} nameData={nameData} signUpErrorHandler={signUpErrorHandler} />
            <SignUpElement id="studentNum" title="학번" name={studentNum} studentNumData={studentNumData} signUpErrorHandler={signUpErrorHandler} />
            <SignUpElement id="grade" title="학년" name={grade} gradeData={gradeData} signUpErrorHandler={signUpErrorHandler} />
            <button className={style.submitBtn} onClick={nextStepHandler}>다음</button>
          </>
        )}
      </div>
      <div className={`${style.form} ${fadeEffect}`}>
        {step === 2 && (
          <>
            <SignUpElement id="nickname" title="닉네임 입력" name="닉네임 입력" nickNameData={nickNameData} signUpErrorHandler={signUpErrorHandler} />
            <SignUpElement id="kakaoid" title="카카오톡 아이디" name="카카오톡 아이디 입력" kakaoData={kakaoData} signUpErrorHandler={signUpErrorHandler} />
            <SignUpElement id="phoneNum" title="전화번호" name="전화번호 -없이 입력" phoneNumData={phoneNumData} signUpErrorHandler={signUpErrorHandler} />
            <SignUpElement id="gender" title="성별" name="준비중" genderData={genderData} signUpErrorHandler={signUpErrorHandler} />
            <SignUpElement id="major" title="단과대/학과" name="단과대/학과 선택" majorData={majorData} collegeData={collegeData} signUpErrorHandler={signUpErrorHandler} />
            <div style={{ display: 'flex', alignItems: 'center', color: doubleMajorChecked ? 'black' : 'grey' }}>
              <input
                type="checkbox"
                id="double_major_checkbox"
                checked={doubleMajorChecked}
                onChange={(e) => setDoubleMajorChecked(e.target.checked)}
                style={{ marginRight: '10px', marginTop: '15px' }}
              />
              <label htmlFor="double_major_checkbox"
                style={{ marginTop: '10px' }}>복수/부전공</label>
            </div>
            {doubleMajorChecked && (
              <SignUpElement id="double_major" name="복수전공/부전공 선택" doublemajorData={doublemajorData} doubleCollegeData={doubleCollegeData} signUpErrorHandler={signUpErrorHandler} />
            )}
            <button type="submit" className={style.submitBtn} onClick={submitHandler}>가입하기</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
