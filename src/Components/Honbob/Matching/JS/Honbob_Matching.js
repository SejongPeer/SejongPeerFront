import { useState, useEffect, useContext } from "react";
import ChoiceGenderHonbob from "./H_MyGender.js";
import H_Gender from "./H_Gender.js";
import H_Menu from "./H_Menu.js";
import H_informCheck from "./H_InformCheck.js";
import PhoneNumHonbob from "./U_PhoneNum_h.js";
import ProgressBar from "../../ProgressBar/ProgressBar_Honbob";
import style from "../CSS/Honbob_Matching.module.css";
import { MyContext } from "../../../../App";
import { useNavigate } from "react-router-dom";
const Honbob_Matching = () => {
  const [slide, setSlide] = useState(0);
  const [choiceGenderHonbob, setChoiceGender] = useState("");
  const [choiceMenu, setChoiceMenu] = useState("");
  const { KaKaoDD, setKaKaoDD } = useContext(MyContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userId = localStorage.getItem("userId");



  useEffect(() => {
    if (userId === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [userId]);

  // 화면 넘기기 (다음 / 이전)

  // 화면 넓이 설정
  const [width, setWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

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

  const slideMove = (page) => {
    console.log("페이지 이동 " + page);
    setSlide(page);
  };

  // 슬라이드별 이동
  const Slide = {
    transform: "translateX(" + -width * slide + "px)",
  };

  //사용자가 입력한 정보

  const GenderChoiceData = (choiceGenderHonbob) => {
    console.log("동성이성(혼밥) : " + choiceGenderHonbob);
    setChoiceGender(choiceGenderHonbob);
  };
  const menuChoiceData = (choiceMenu) => {
    setChoiceMenu(choiceMenu);
  }

  const { honbobSubmit, setHonbobSubmit } = useContext(MyContext);

  let sameGender = {};

  if (choiceGenderHonbob === "동성") {
    sameGender = "true";
  } else {
    sameGender = "false";
  }


  //수정->alert?
  let kakaoId = isLoggedIn ? localStorage.getItem("kakaoId") : null;
  let phoneNumber = isLoggedIn ? localStorage.getItem("phoneNum") : null;


  const honbobSubmitHandler = async (e) => {
    let findInfo = {
      phoneNumber: phoneNumber,
      myGender: myGender,
      buddyGender: sameGender,
    };
    console.log(findInfo);
    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + "/honbob/matching",
        {
          method: "POST",
          body: JSON.stringify(findInfo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json(); // data 변수를 await로 초기화

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("제출 성공");
      console.log("제출 성공");
      console.log(data.message);
      setHonbobSubmit(false);
      navigate("/honbob/waiting");
    } catch (error) {
      console.error("Error occurred:", error);
      console.log("제출 실패");
      console.error(error.message);
      alert(error.message);
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (honbobSubmit === true && slide === 2) {
      honbobSubmitHandler();
    }
  }, [honbobSubmit]);

  return (
    <div className={style.wrapper} style={mediaWidth}>
      <div className={style.formWrapper} style={Slide}>
        <H_Gender sendChoiceGenderData={GenderChoiceData} />
        <H_Menu sendMenuData={menuChoiceData} />
        <H_informCheck />
        {/* <PhoneNumHonbob
          sendPhoneNumData={PhoneNumData}
          sendKakaoData={KaKaoData}
        /> */}
        {/* <ChoiceGenderHonbob sendChoiceMyGenderData={MyGenderChoiceData} /> */}

      </div>
      <ProgressBar
        moveNext={MoveNext}
        moveBefore={MoveBefore}
        slide={slide}
        setSlide={setSlide}
        choiceGenderHonbob={choiceGenderHonbob}
        slideMove={slideMove}
      />
    </div>
  );
};

export default Honbob_Matching;
