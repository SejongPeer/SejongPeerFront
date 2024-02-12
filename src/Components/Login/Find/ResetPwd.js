import { useState } from "react";
import style from "../SignIn/SignIn.module.css";
import css from "./ResetPwd.module.css";
import SignInBox from "../SignIn/SignInBox";
import axios from "axios";

const ResetPwd = () => {
  const [id, setId] = useState("");
  const [pwd, setPWd] = useState("");
  const [studentId, setStudentId] = useState("");
  const [peerId, setpeerId] = useState("");
  const [peerPwd, setpeerPwd] = useState("");

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
      .post("/api?method=ClassicSession", {
        id: id,
        pw: pwd,
      })
      .then((response) => {
        console.log(response.data);
        setStudentId(id);
        resetPwddHandler();
      })
      .catch((err) => console.log(err.message));
  };

  const resetPwddHandler = () => {
    axios
      .post("", {
        studentId: studentId,
        peerId: peerId,
        peerPwd: peerPwd,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err.data));
  };

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
      <SignInBox inputID={inputID} name="비밀번호 입력" />
      <SignInBox inputPwd={inputPwd} name="비밀번호 재입력" id="pwd" />
      <button className={style.signInBtn} onClick={isSejong}>
        비밀번호 변경하기
      </button>
    </div>
  );
};

export default ResetPwd;
