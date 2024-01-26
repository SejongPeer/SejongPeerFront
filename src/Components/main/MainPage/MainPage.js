import { Link, useNavigate } from "react-router-dom";
import style from "./MainPage.module.css";
import MainBuddy from "./MainBuddy";
import MainHonbob from "./MainHonbob";
import reprot from "../../../Assets/report.png";
import { useEffect } from "react";
import { DevOpsGuru } from "aws-sdk";
//import MainStudy from "./MainStudy";

const MainPage = () => {
  const navigate = useNavigate();
  const BuddyHandler = () => {
    navigate("/buddy/start1");
  };
  const HonbobHandler = () => {
    navigate("/honbob/start1");
  };
  const StudyHandler = () => {
    navigate("/study");
  };
  const reportUserHandler = () => {
    alert("너 신고");
  };
  // const readyHandler = () => {
  //   alert("준비중임");
  // }; _AgxobG

  useEffect(() => {
    if (window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.onload = () => {
        const key = process.env.REACT_APP_KAKAO_KEY;
        window.Kakao.init(key);
      };
      document.head.appendChild(script);
    }
  }, []);

  const kakaoChat = () => {
    if (window.Kakao) {
      window.Kakao.Channel.chat({
        channelPublicId: "_AgxobG", // 여기에 채널의 고유 ID를 입력하세요.
      });
    }
  };

  return (
    <div className={style.container}>
      <div
        style={{
          marginTop: "10vh",
          padding: "2vh",
          // backgroundColor: "#FFF7F7",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "3%" }}>
          <button onClick={BuddyHandler} className={style.btn}>
            <MainBuddy />
          </button>
          <button onClick={HonbobHandler} className={style.btn}>
            <MainHonbob />
          </button>
        </div>
        <button onClick={StudyHandler} className={style.studyBtn}></button>
      </div>
      <div className={style.report_user_box}>
        <div className={style.reprot_icon} onClick={kakaoChat}>
          <img src={reprot} alt="reprot" />
        </div>
        <span>악성 유저 신고</span>
      </div>
      {/* <button className={style.btn} onClick={readyHandler}>
            <MainStudy />
        </button> */}
      <footer className={style.footer}>
        <div className={style.ftxtBox}>
          <Link to={"/personalinfo"} target="_blank" className={style.ftxt}>
            <span>개인정보처리방침</span>
          </Link>
          <span className={style.ftxt}> | </span>
          <Link to={"/useinfo"} target="_blank" className={style.ftxt}>
            <span>이용약관</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
