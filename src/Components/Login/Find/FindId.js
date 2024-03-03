import { useContext, useState } from "react";
// import style from "../SignIn/SignIn.module.css";
import style from "../Find/FindId.module.css";
import SignInBox from "../SignIn/SignInBox";
import axios from "axios";
import { MyContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const FindId = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPWd] = useState("");
  const { setName, setStudentNum, studentNum, name } = useContext(MyContext);

  const inputID = (idinput) => {
    setId(idinput);
  };
  const inputPwd = (pwdinput) => {
    setPWd(pwdinput);
  };

  const isSejong = async() => {
    console.log(id);
    console.log(pwd);
    
    try {
      // 세종어스 확인
      const response1 = await axios
      .post("/api?method=ClassicSession", {
        id: id,
        pw: pwd,
      });
        let nameData = response1.data.result.body.name;
        setStudentNum(id);
        setName(nameData);
        console.log("학번 : " +id);
        console.log("이름 : "+ nameData);
        console.log("학번 + 이름 :" + studentNum + name);

      //아이디 찾기
      const response2 = await axios
      .post(`${process.env.REACT_APP_BACK_SERVER}/member/help/find-account`,{
        studentId : studentNum,
        name : name,
      });
      console.log(response2.data.data.account);
      console.log(response2.data);

      let findAccount = response2.data.data.account;
      
      navigate("/login/resetpwd", { state: { findAccount, studentNum } });

    } catch(err) {
      console.log(err.message);
    }
  };
  
  return (
    <div className={style.entire_Container}>
      <div className={style.container}>
        <div className={style.explain_box2}>
          <p className={style.explain_title}>아이디/비밀번호 찾기</p>
          <p className={style.explain}>
            세종대학교 포털로그인
          </p>
        </div>
          <div className={style.aaa}>
            <SignInBox inputID={inputID} name="포털 로그인 아이디(학번)" />
            <SignInBox inputPwd={inputPwd} name="포털 로그인 비밀번호" id="pwd" />
            <button className={style.signInBtn} onClick={isSejong}>
            아이디/비밀번호 찾기
            </button>
            <a href="http://portal.sejong.ac.kr/" className={style.sejong}>
              http://portal.sejong.ac.kr/
            </a>
          </div>
      </div>
    </div>
  );
};

export default FindId;
