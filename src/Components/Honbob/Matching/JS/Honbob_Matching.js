import { useState, useEffect } from "react";
import ChoiceGenderHonbob from "./H_MyGender.js";
import H_Gender from "./H_Gender.js";
import PhoneNumHonbob from "./U_PhoneNum_h.js";
//import ProgressBar from "../../ProgressBar_Honbob/ProgressBar_Honbob.js";
import style from "../CSS/Honbob_Matching.module.css";

const Honbob_Matching = () => {
  const [slide, setSlide] = useState(0);

  const [choiceGenderHonbob, setChoiceGender] = useState("");
  const [phoneNumHonbob, setPhoneNum] = useState("");
  const [kakaohonbob, setKakao] = useState("");

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
    if (slide >= 5) {
      setSlide(5);
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
  /*const slideMove = (page) => {
    console.log("페이지 이동 " + page);
    setSlide(page);
  };*/

  //사용자가 입력한 정보
  const GenderChoiceData = (choiceGenderHonbob) => {
    console.log("동성이성(혼밥) : " + choiceGenderHonbob);
    setChoiceGender(choiceGenderHonbob);
  };
  const PhoneNumData = (phoneNumHonbob) => {
    console.log("핸드폰 : " + phoneNumHonbob);
    setPhoneNum(phoneNumHonbob);
  };
  const KaKaoData = (kakaohonbob) => {
    console.log("카톡 : " + kakaohonbob);
    setKakao(kakaohonbob);
  };

  return (
    <div className={style.wrapper} style={mediaWidth}>
      <div className={style.formWrapper} style={Slide}>
        <H_Gender sendChoiceGenderData={GenderChoiceData} />

        <PhoneNumHonbob
          sendPhoneNumData={PhoneNumData}
          sendKakaoData={KaKaoData}
        />
        <ChoiceGenderHonbob sendChoiceGenderData={GenderChoiceData} />
      </div>
      {/*<ProgressBar
        moveNext={MoveNext}
        moveBefore={MoveBefore}
        slide={slide}
        setSlide={setSlide}
        choiceGender={choiceGender}
        phoneNum={phoneNum}
        kakao={kakao}
  />*/}
    </div>
  );
};

export default Honbob_Matching;
