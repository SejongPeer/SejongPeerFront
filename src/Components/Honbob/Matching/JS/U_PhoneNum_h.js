import { useState, useContext,useEffect } from "react";
import { MyContext } from "../../../../App";
import con from "../CSS/H_Container.module.css";
import box from "../CSS/H_InputBox.module.css";

const PhoneNumHonbob = (props) => {
  const [isKaKaoInput, setIsKaKaoInput] = useState("");
  const [isPhoneInput, setIsPhoneInput] = useState("");
  const { KaKaoDD, setKaKaoDD } = useContext(MyContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userId = localStorage.getItem("userId");
  const kakaoId = localStorage.getItem("kakaoId");
  const phoneNum = localStorage.getItem("phoneNum");


  useEffect(() => {
      if (userId === null) {
          setIsLoggedIn(false);
      } else {
          setIsLoggedIn(true);
      }
  },[userId]);


  const inputKaKaoChangeHandler = (event) => {
    setIsKaKaoInput(event.target.value);
    const kakao = event.target.value;
    props.sendKakaoData(kakao);
  };
  setKaKaoDD(isKaKaoInput);

  const inputKaKaoChange = {
    border: isKaKaoInput ? "1px solid #4F41DE" : "1px solid #ccc",
  };

  
  const inputPhoneChangeHandler = (event) => {
    const input = event.target.value;
    const phoneNum = input.replace(/[^0-9]/g, "");

    if (phoneNum.length <= 11) {
      setIsPhoneInput(phoneNum);
      props.sendPhoneNumData(phoneNum);
    }
  };

  const inputPhoneChange = {
    border: isPhoneInput ? "1px solid #4F41DE" : "1px solid #ccc",
  };

  return (
    <div className={con.container}>
      <p className={con.title}>카톡 아이디와 전화번호를 입력해주세요</p>
      <input
        type="text"
        placeholder="카톡 아이디 입력"
        className={box.inputText}
        onChange={inputKaKaoChangeHandler}
        value={isLoggedIn?kakaoId:isKaKaoInput}
        style={inputKaKaoChange}
      ></input>

      <input
        type="number"
        placeholder="전화번호 입력 (ex: 01012345678)"
        className={box.inputText}
        onChange={inputPhoneChangeHandler}
        value={isLoggedIn?phoneNum:isPhoneInput}
        style={inputPhoneChange}
      ></input>
    </div>
  );
};

export default PhoneNumHonbob;
