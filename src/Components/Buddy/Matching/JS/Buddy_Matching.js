import { useState, useEffect } from "react";
import ChoiceGender from "./B_Gender";
import Grade from "./B_BuddyType";
import Major from "./B_Major";
import GradeDiff from "./B_Grade";
import PhoneNum from "./U_PhoneNum";
import Final from "./Buddy_Final";
import ProgressBar from "../../ProgressBar/ProgressBar.js";

import style from "../CSS/Buddy_Matching.module.css";

const Buddy_Matching = () => {
  const [slide, setSlide] = useState(0);

  const [choiceGender, setChoiceGender] = useState("");
  const [grade, setGrade] = useState("");
  const [major, setMajor] = useState("");
  const [subMajor, setSubMajor] = useState(false);
  const [gradeDiff, setGradeDiff] = useState("");

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

  // 화면 넘기기 (다음 / 이전)
  // 다음
  const MoveNext = () => {
    setSlide(prevSlide => {
      if (prevSlide >= 4) {
        return 4;
      } else {
        return prevSlide + 1;
      }
    });
  };

  // 이전
  const MoveBefore = () => {
    setSlide(prevSlide => {
      if (prevSlide <= 0) {
        return 0;
      } else {
        return prevSlide - 1;
      }
    });
  };

  // 슬라이드별 이동
  const Slide = {
    transform: "translateX(" + -width * slide + "px)",
  };

  //Final에서
  const slideMove = (page) => {
    const p = page;
    console.log("페이지 이동 " + p);
    setSlide(p);
  };

  //사용자가 입력한 정보
  const GenderChoiceData = (choiceGender) => {
    console.log("동성이성 : " + choiceGender);
    setChoiceGender(choiceGender);
  };
  const GradeData = (grade) => {
    console.log("어떤 짝 : " + grade);
    setGrade(grade);
  };
  const MajorData = (major) => {
    console.log("범위 : " + major);
    setMajor(major);
  };
  const subMajorData = (sub) => {
    console.log("복수/부전공" + sub);
    setSubMajor(sub);
  }
  const GradeDiffData = (gradeDiff) => {
    console.log("학년 : " + gradeDiff);
    setGradeDiff(gradeDiff);
  };

  return (
    <div className={style.wrapper} style={mediaWidth}>
      <div className={style.formWrapper} style={Slide}>
        <ChoiceGender sendChoiceGenderData={GenderChoiceData} />
        <Major 
        sendMajorData={MajorData} 
        sendSubMajorData={subMajorData}/>
        <Grade sendGradeData={GradeData} />
        <GradeDiff sendGradeDiffData={GradeDiffData} />
        <Final
          choiceGender={choiceGender}
          grade={grade}
          major={major}
          subMajor={subMajor}
          gradeDiff={gradeDiff}
          slideMove={slideMove}
        />
      </div>
      
      <ProgressBar
        moveNext={MoveNext}
        moveBefore={MoveBefore}
        slide={slide}
        setSlide={setSlide}
        choiceGender={choiceGender}
        grade={grade}
        major={major}
        subMajor={subMajor}
        gradeDiff={gradeDiff}
      />
    </div>
  );
};

export default Buddy_Matching;
