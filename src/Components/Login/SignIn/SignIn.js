import SignInBox from "./SignInBox";
import { useNavigate } from "react-router-dom";

import style from "./SignIn.module.css";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const goSignUpHandler = () => {
    navigate("/login/agree");
  };
  const goFindIdHandler = () => {
    navigate("/login/findid");
  };
  const goResetPwdHandler = () => {
    navigate("/login/resetpwd");
  };

  const [id, setId] = useState("");
  const [pwd, setPWd] = useState("");

  const inputID = (idinput) => {
    setId(idinput);
  };
  const inputPwd = (pwdinput) => {
    setPWd(pwdinput);
  };

  console.log(id, pwd);

  //login
  const LoginHandler = async (e) => {
    let login = {
      username: id,
      password: pwd,
    };

    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + "/login",
        {
          method: "POST",
          body: JSON.stringify(login),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json(); // data 변수를 await로 초기화

      if (!response.ok) {
        throw new Error(data.message);
      }

      // console.log(id, pwd);

      // console.log(response);
      // console.log(response.user);
      console.log(data.user);
      // 로그인 성공 후, 로컬 스토리지에 저장
      localStorage.setItem("birth", data.user.birth);
      localStorage.setItem("gender", data.user.gender);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("kakaoId", data.user.kakaoId);
      localStorage.setItem("major", data.user.major);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("phoneNum", data.user.phoneNum);
      localStorage.setItem("sejongEmail", data.user.sejongEmail);
      localStorage.setItem("studentId", data.user.studentId);
      alert("로그인 성공 메인페이지로 이동합니다.");
      navigate("/main");
    } catch (error) {
      console.error("Error occurred:", error);
      console.error(error.message);
      alert(error.message);
      e.preventDefault();
    }
  };

  return (
    <div className={style.container}>
      <SignInBox inputID={inputID} name="아이디" />
      <SignInBox inputPwd={inputPwd} name="비밀번호" id="pwd" />
      <button className={style.signInBtn} onClick={LoginHandler}>
        로그인
      </button>
      <div>
        <button onClick={goFindIdHandler} className={style.findBtn}>
          아이디 찾기
        </button>
        <span className={style.line}> | </span>
        <button onClick={goResetPwdHandler} className={style.findBtn}>
          비밀번호 찾기
        </button>
        <span className={style.line}> | </span>
        <button onClick={goSignUpHandler} className={style.signUpBtn}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignIn;
