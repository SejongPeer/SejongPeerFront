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

  //login
  const LoginHandler = async (e) => {
    e.preventDefault(); // 기본 이벤트를 방지합니다.

    let login = {
      account: id,
      password: pwd,
    };

    console.log(id);
    console.log(pwd);

    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + "/auth/sign-in",
        {
          method: "POST",
          body: JSON.stringify(login),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json(); // 오류 응답을 처리합니다.
        throw new Error(data.message);
      }

      const data = await response.json(); // data 변수를 await로 초기화

      console.log(data)
      console.log(data.data.accessToken)
      console.log(data.data.refreshToken)
      // console.log(data.user);
      // console.log(id);
      // console.log(pwd);

      // 로그인 성공 후, 로컬 스토리지에 저장
      localStorage.setItem("userId", id);
      localStorage.setItem("pwd", pwd);
      localStorage.setItem("kakaoAccount", data.data.kakaoAccount);
      localStorage.setItem("name", data.data.name);
      localStorage.setItem("grade", data.data.grade);
      localStorage.setItem("major", data.data.major);
      localStorage.setItem("minor", data.data.minor); // null 값이 가능하므로 처리 필요 없음
      localStorage.setItem("nickname", data.data.nickname);
      localStorage.setItem("phoneNumber", data.data.phoneNumber);
      localStorage.setItem("account", data.data.account);
      localStorage.setItem("studentId", data.data.studentId);
      localStorage.setItem("gender", data.data.gender);

      //토큰
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);

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
    <div className={style.entire_Container}>
    <div className={style.container}>
      <SignInBox inputID={inputID} name="아이디" />
      <SignInBox inputPwd={inputPwd} name="비밀번호" id="pwd" />
      <button className={style.signInBtn} onClick={LoginHandler}>
        로그인
      </button>
      <div>
        <button onClick={goFindIdHandler} className={style.findBtn}>
          ID • PW 찾기
        </button>
        <span className={style.line}> | </span>
        <button onClick={goSignUpHandler} className={style.signUpBtn}>
          회원가입
        </button>
      </div>
    </div>
    </div>
  );
};

export default SignIn;