import { useContext, useState } from "react";
import style from "../SignIn/SignIn.module.css";
import css from "./ResetPwd.module.css";
import SignInBox from "../SignIn/SignInBox";
import axios from "axios";
import { MyContext } from "../../../App";

const ResetPwd = () => {
  const [peerPwd, setpeerPwd] = useState("");
  const [peerPwd2, setpeerPwd2] = useState("");
  const { studentNum, peerId } = useContext(MyContext);

  const resetPwdHandler = () => {
    if (peerPwd === peerPwd2) {
      axios
      .post("", {
        studentId: studentNum,
        peerId: peerId,
        peerPwd: peerPwd,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.data));
    } else {
      alert("비밀번호가 일치하지 않습니다.")
    }
  };

  const inputPwdHandler = (inputPwd) => {
    setpeerPwd(inputPwd);
  };

  const inputPwdHandler2 = (inputPwd) => {
    setpeerPwd2(inputPwd);
  }

  return (
    <div className={style.container}>
      <div className={css.explain_box}>
        <p className={css.explain}>회원님의 ID는</p>
        <input type="text" className={css.show_id}></input>
        <p className={css.explain}>
          입니다.
        </p>
      </div>
      <div className={css.reset_title}>
        <span className={css.explain}>비밀번호 변경하기</span>
        <p className={css.explain_sub}>새로운 비밀번호(10-16자의 영문 + 숫자)</p>
      </div>
      <SignInBox 
      inputPwdHandler={inputPwdHandler} 
      name="비밀번호 입력"/>
      <SignInBox 
      inputPwdHandler2={inputPwdHandler2} 
      name="비밀번호 재입력"/>
      <button className={style.signInBtn} onClick={resetPwdHandler}>
        비밀번호 변경하기
      </button>
    </div>
  );
};

export default ResetPwd;
