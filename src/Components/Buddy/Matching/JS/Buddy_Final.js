import styles from "../CSS/Buddy_Final.module.css";
import con from "../CSS/B_Container.module.css";
import { useContext, useEffect } from "react";
import { MyContext } from "../../../../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Final = (props) => {
  const Page1 = () => {
    const page = 0;
    props.slideMove(page);
  };
  const Page2 = () => {
    const page = 1;
    props.slideMove(page);
  };
  const Page3 = () => {
    const page = 2;
    props.slideMove(page);
  };
  const Page4 = () => {
    const page = 3;
    props.slideMove(page);
  };

  const { buddySubmit, setBuddySubmit } = useContext(MyContext);

  let sameGender;
  if (props.choiceGender === "동성") {
    sameGender = "true";
  } else {
    sameGender = "false";
  }

  let buddyType = {};
  if (props.grade === "선배") {
    buddyType = "senior";
  } else if (props.grade === "후배") {
    buddyType = "junior";
  } else if (props.grade === "동기") {
    buddyType = "friend";
  } else {
    buddyType = "dontCare";
  }

  let buddyRange = {};
  if (props.major === "우리 학과 버디") {
    buddyRange = "major";
  } else if (props.major === "우리 단과대 버디") {
    buddyRange = "college";
  } else {
    buddyRange = "dontCare";
  }

  let buddyGrades = {};
  if (props.gradeDiff === "1") {
    buddyGrades = "1"
  } else if (props.gradeDiff === "2") {
    buddyGrades = "2"
  } else if (props.gradeDiff === "3") {
    buddyGrades = "3"
  } else if (props.gradeDiff === "4") {
    buddyGrades = "4"
  } else {
    buddyGrades = "any"
  }

  let phoneNumber = localStorage.getItem("phoneNum");
  let kakaoId = localStorage.getItem("kakaoId");

  const navigate = useNavigate();

  const buddySubmitHandler = async (e) => {
    let matchingInfo = {
      sameGender: sameGender,
      buddyType: buddyType,
      buddyRange: buddyRange,
      buddyGrades: buddyGrades,
      phoneNumber: phoneNumber,
      kakaoId: kakaoId,
    };
    console.log(JSON.stringify(matchingInfo));

    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + "/buddy/matching",
        {
          method: "POST",
          body: JSON.stringify(matchingInfo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json(); // data 변수를 await로 초기화
      console.log(data.message);

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("제출 성공");
      console.log(data.message);
      setBuddySubmit(false);
      navigate("/buddy/waiting");
    } catch (error) {
      console.error("Error occurred:", error);
      console.error(error.message);
      alert(error.message);
      setBuddySubmit(false);
    }

  };

  useEffect(() => {
    if (buddySubmit === true) {
        buddySubmitHandler();
    }
  }, [buddySubmit]);

  return (
    <div className={con.container}>
      <div className={con.titlebox}>
        <p className={con.finaltitle}>입력하신 정보를 확인해주세요</p>
        <p className={con.explain}>
          각 정보를 클릭하면 정보를 입력했던 페이지로 이동합니다.
        </p>
      </div>
      
      <div className={styles.wrapper}>
        <div className={styles.infoWrapper} onClick={Page1}>
          <div className={styles.titleWrapper}>
            <div className={styles.complete}></div>
            <span>버디성별</span>
          </div>
          <div className={styles.textWrapper}>{props.choiceGender}</div>
        </div>
      
        <div className={styles.infoWrapperHalf} onClick={Page2}>
          <div className={styles.titleWrapper}>
            <div className={styles.complete}></div>
            <span>버디범위</span>
          </div>
          <div className={styles.textWrapperHalf}>{props.major}</div>
        </div>

        <div className={styles.infoWrapperHalf} onClick={Page3}>
          <div className={styles.titleWrapper}>
            <div className={styles.complete}></div>
            <span>버디관계</span>
          </div>
          <div className={styles.textWrapperHalf}>{props.grade}</div>
        </div>

        <div className={styles.infoWrapper} onClick={Page4}>
          <div className={styles.titleWrapper}>
            <div className={styles.complete}></div>
            <span>버디학년</span>
          </div>
          <div className={styles.textWrapper}>{buddyGrades}</div>
        </div>

        <div className={styles.infoWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.complete}></div>
            <span>카카오톡 아이디</span>
          </div>
          <div className={styles.textWrapper}>{kakaoId}</div>
        </div>

        <div className={styles.infoWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.complete}></div>
            <span>전화번호</span>
          </div>
          <div className={styles.textWrapper}>{phoneNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default Final;
