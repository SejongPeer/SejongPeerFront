import { useState, useContext } from "react";
import style from "../SignIn/SignIn.module.css";
import SignInBox from "../SignIn/SignInBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../App";

const Sejong = () => {
  const [id, setId] = useState("");
  const [pwd, setPWd] = useState("");
  const navigate = useNavigate();
  const inputID = (idinput) => {
    setId(idinput);
  };
  const inputPwd = (pwdinput) => {
    setPWd(pwdinput);
  };

  const { name, setName } = useContext(MyContext);
  const { studentNum, setStudentNum } = useContext(MyContext);

  const isSejong = () => {  
    axios
    .post(process.env.REACT_APP_BACK_SERVER + '/auth/sejong-auth', {
      id: id,
      pw: pwd,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(
      (response) => {
        let result = response.data.data.isAuth;
        if (result === false)
            alert("아이디 및 비밀번호가 일치하지 않습니다")
          else if (result === true) {
            setName(response.data.result.body.name)
            setStudentNum()
            navigate("/login/signup");
          }
      }
    )
    .catch((err) => console.log(err.message));
  };

  return (
    <div className={style.entire_Container}>
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
    </div>
  );
};

export default Sejong;
