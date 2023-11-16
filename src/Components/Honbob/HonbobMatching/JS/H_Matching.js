import { useState, useEffect } from "react";
import H_Gender from "./H_Gender";
import style from "../CSS/H_Matching.module.css";
import HonbobWaiting from "../../HonbobWaiting/HonbobWaiting";
const H_Matching = () => {
  const [slide, setSlide] = useState(0);

  const [choiceGender, setChoiceGender] = useState("");
  const [myGender, setMyGender] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [kakao, setKakao] = useState("");

  // 화면 넘기기 (다음 / 이전)

  // 화면 넓이 설정
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      let wrapperWidth = width;
      if (window.innerWidth < 415) {
        wrapperWidth = window.innerWidth;
      } else {
        wrapperWidth = 414;
      }
      setWidth(wrapperWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const mediaWidth = {
    width: width,
  };

  //다음
  const MoveNext = () => {
    setSlide(slide + 1);
    if (slide >= 3) {
      setSlide(3);
    }
  };

  //이전
  const MoveBefore = () => {
    setSlide(slide - 1);
    if (slide <= 0) {
      setSlide(0);
    }
  };

  // 슬라이드별 이동
  const Slide = {
    transform: "translateX(" + -width * slide + "px)",
  };

  //Final에서
  const slideMove = (page) => {
    console.log("페이지 이동 " + page);
    setSlide(page);
  };

  //사용자가 입력한 정보
  const MyGenderChoiceData = (myGender) => {
    console.log("내 성별 : " + myGender);
    setMyGender(myGender);
  };
  const GenderChoiceData = (choiceGender) => {
    console.log("동성이성 : " + choiceGender);
    setChoiceGender(choiceGender);
  };

  const PhoneNumData = (phoneNum) => {
    console.log("핸드폰 : " + phoneNum);
    setPhoneNum(phoneNum);
  };
  const KaKaoData = (kakao) => {
    console.log("카톡 : " + kakao);
    setKakao(kakao);
  };

  return (
    <div className={style.wrapper} style={mediaWidth}>
      <div className={style.formWrapper} style={Slide}>
        <H_Gender sendChoiceGenderData={GenderChoiceData} />

        {/* <PhoneNum
            sendPhoneNumData={PhoneNumData} 
            sendKakaoData={KaKaoData}/> */}

        {/* <Final 
            choiceGender={choiceGender} 
            myGender={myGender}
            phoneNum={phoneNum} 
            kakao={kakao}
            slideMove={slideMove}
            /> */}
      </div>
      {/* <ProgressBar 
        moveNext={MoveNext} 
        moveBefore={MoveBefore} 
        slide = {slide}
        setSlide = {setSlide}
        choiceGender={choiceGender} 
        /> */}
    </div>
  );
};

export default H_Matching;
