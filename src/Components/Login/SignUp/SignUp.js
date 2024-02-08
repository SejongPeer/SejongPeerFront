import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [collegeValue, setCollegeValue] = useState("");
  const [majorValue, setMajorValue] = useState("");
  const [doublemajorValue, setDoubleMajorValue] = useState("");
  const [studentNumberValue, setStudentNumberValue] = useState("");
  const [gradeValue, setGradeValue] = useState("");
  const [nicknameValue, setNicknameValue] = useState("");

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

  const collegeData = (userCollege) => {
    setCollegeValue(userCollege);
  };

  const majorData = (userMajor) => {
    setMajorValue(userMajor);
  };

  const doublemajorData = (userDoubleMajor) => {
    setDoubleMajorValue(userDoubleMajor);
  };//복수전공데이터추가

  const studentNumData = (userStudentNum) => {
    setStudentNumberValue(userStudentNum);
  };

  const nickNameData = (userNickName) => {
    setNicknameValue(userNickName);
  }//추가


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
    console.log("collegeValue : " + collegeValue);
    console.log("majorValue : " + majorValue);
    console.log("studentNumberValue : " + studentNumberValue);
    console.log("gradeValue : " + gradeValue);
    console.log("nicknameValue : " + nicknameValue);

    if (
      idValue === "" ||
      pwdValue === "" ||
      emailValue === "" ||
      nameValue === "" ||
      birthValue === "" ||
      kakaoidValue === "" ||
      phoneNumberValue === "" ||
      genderValue === "" ||
      collegeValue === "" ||
      majorValue === "" ||
      studentNumberValue === "" ||
      gradeValue === "" ||
      nicknameValue === "" 
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
          college: collegeValue,
          major: majorValue,
          studentNumber: studentNumberValue,
          grade: gradeValue,
          nickname : nicknameValue,
        };

        try {
          const response = await fetch(
            process.env.REACT_APP_BACK_SERVER + "/apply/register",
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


  useEffect(() => {
    setFadeEffect('fade-in transition-effect'); // CSS 클래스 추가
    const timeoutId = setTimeout(() => setFadeEffect(''), 500); // 효과 지속 시간 후 클래스 제거
    return () => clearTimeout(timeoutId);
  }, [step]);

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
            <SignUpElement id="pwd" name="비밀번호 확인" pwdData={pwdData} signUpErrorHandler={signUpErrorHandler}
        />
            </div>
            <SignUpElement id="name" title="이름" name="이름 입력" nameData={nameData} signUpErrorHandler={signUpErrorHandler} />
            <SignUpElement id="studentNum" title="학번" name="학번입력 (ex: 22)" studentNumData={studentNumData} signUpErrorHandler={signUpErrorHandler} />
            <button className={style.submitBtn} onClick={nextStepHandler}>다음</button>
          </>
        )}
      </div>
      <div className={`${style.form} ${fadeEffect}`}>
        {step === 2 && ( 
          <>          
            <SignUpElement id="nickname" title="닉네임 입력" name="닉네임 입력" idData={nickNameData} signUpErrorHandler={signUpErrorHandler} />
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
                style={{ marginRight: '10px' ,marginTop: '15px'}}
              />
            <label htmlFor="double_major_checkbox"
                  style={{ marginTop: '10px'}}>복수/부전공</label>
            </div>
            {doubleMajorChecked && (
            <SignUpElement id="double_major" name="복수전공/부전공 선택" doublemajorData={doublemajorData} collegeData={collegeData} signUpErrorHandler={signUpErrorHandler} />
            )}
            <button type="submit" className={style.submitBtn} onClick={submitHandler}>가입하기</button> 
            </>  
        )}
      </div>
      </div>
  ); 
};

export default SignUp;
