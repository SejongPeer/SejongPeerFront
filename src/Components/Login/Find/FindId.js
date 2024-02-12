import { useState } from "react";
import style from "../SignIn/SignIn.module.css";
import SignInBox from "../SignIn/SignInBox";
import axios from "axios";

const FindId = () => {
  const [id, setId] = useState("");
  const [pwd, setPWd] = useState("");
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");

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
        let nameData = response.data.result.body.name;
        setName(nameData);
        setStudentId(id);
        findIdHandler();
        })
      .catch((err) => console.log(err.message));
  };

  const findIdHandler = () => {
    axios.post("", {
        studentId : studentId,
        name : name
    })
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err.data))
  }
  
  return (
    <div className={style.container}>
      <div className={style.explain_box2}>
        <p className={style.explain_title}>아이디/비밀번호 찾기</p>
        <p className={style.explain}>
          세종대학교 포털로그인
        </p>
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

export default FindId;
