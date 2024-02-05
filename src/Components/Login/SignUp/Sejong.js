import { useState } from "react";
import style from "../SignIn/SignIn.module.css";
import SignInBox from "../SignIn/SignInBox";
import axios from "axios";

const Sejong = () => {
  const [id, setId] = useState("");
  const [pwd, setPWd] = useState("");

  const inputID = (idinput) => {
    setId(idinput);
  };
  const inputPwd = (pwdinput) => {
    setPWd(pwdinput);
  };

  const isSejong = () => {
    console.log(id);
    console.log(pwd);
    axios
      .post("/api?method=PortalSSOToken", {
        id: id,
        pw: pwd,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className={style.container}>
      <div className={style.explain_box}>
        <p className={style.explain_title}>세종대학교 학생 인증</p>
        <p className={style.explain}>
          세종대학교 통합 로그인을 통해 인증합니다.
        </p>
        <p className={style.explain}>(세종대학교 포털 ID/PW)</p>
      </div>
      <SignInBox inputID={inputID} name="포털 로그인 아이디(학번)" />
      <SignInBox inputPwd={inputPwd} name="포털 로그인 비밀번호" id="pwd" />
      <button className={style.signInBtn} onClick={isSejong}>
        통합 로그인 인증
      </button>
      <a href="http://portal.sejong.ac.kr/" className={style.sejong}>
        http://portal.sejong.ac.kr/
      </a>
    </div>
  );
};

export default Sejong;
