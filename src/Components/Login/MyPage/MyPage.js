import { useNavigate } from "react-router-dom";
import styles from "../MyPage/MyPage.module.css";
import axios from "axios";

const MyPage = () => {
  const navigate = useNavigate();
  const goModify = () => {
    navigate("/modify");
  };
  const handleLogout = () => {
    axios
      .get(`${process.env.REACT_APP_BACK_SERVER + "/logout"}`)
      .then(
        (response) => console.log(response),
        localStorage.removeItem("userId"),
        localStorage.removeItem("birth"),
        localStorage.removeItem("gender"),
        localStorage.removeItem("kakaoId"),
        localStorage.removeItem("major"),
        localStorage.removeItem("name"),
        localStorage.removeItem("phoneNum"),
        localStorage.removeItem("sejongEmail"),
        localStorage.removeItem("studentId"),
        console.log("로그아웃 성공!"),
        alert("로그아웃 되었습니다!"),
        navigate("/main")
      )
      .catch((error) => console.log(error));
  };

  const userId = localStorage.getItem("userId");
  const birth = localStorage.getItem("birth");
  const gender = localStorage.getItem("gender");
  let gender_text = "";
  if (gender === "male") {
    gender_text = "남자";
  }
  if (gender === "female") {
    gender_text = "여자";
  }

  const kakaoId = localStorage.getItem("kakaoId");
  const phoneNum = localStorage.getItem("phoneNum");
  const major = localStorage.getItem("major");
  const name = localStorage.getItem("name");

  const sejongEmail = localStorage.getItem("sejongEmail");
  const studentId = localStorage.getItem("studentId");

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.informTitleBox}>
          <p style={{ fontWeight: "700", marginBottom: "0px" }} className={styles.informTitle}>매칭정보</p>
        </div>

        <div className={styles.matchingBox}>
          <button className={styles.matchingButton}>
            <div className={styles.leftBox}>
              <div className={`${styles.redWord} ${styles.checkWord}`}>세종스터디</div>
              <div className={`${styles.blackWord} ${styles.checkWord}`} style={{ fontWeight: "700" }}>내 게시글 확인</div>
            </div>
            <div className={styles.rightImg}></div>
          </button>
          <button className={styles.matchingButton}>
            <div className={styles.leftBox}>
              <div className={`${styles.redWord} ${styles.checkWord}`}>세종버디</div>
              <div className={`${styles.blackWord} ${styles.checkWord}`} style={{ fontWeight: "700" }}>매칭 상대 확인</div>
            </div>
            <div className={styles.rightImg}></div>
          </button>
          <button className={styles.matchingButton}>
            <div className={styles.leftBox}>
              <div className={`${styles.redWord} ${styles.checkWord}`}>혼밥탈출</div>
              <div className={`${styles.blackWord} ${styles.checkWord}`} style={{ fontWeight: "700" }}>밥짝꿍 확인</div>
            </div>
            <div className={styles.rightImg}></div>
          </button>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.informTitleBox}>
          <p style={{ fontWeight: "700", marginBottom: "0px" }}>내 정보</p>
        </div>

        <div className={styles.myInformBox}>
          <button className={styles.myInformBtn} onClick={goModify}>
            <div className={styles.leftBox}>
              <div className={`${styles.blackWord} ${styles.myInformWord}`} style={{ fontWeight: "700" }} >정준수</div>
              <div className={`${styles.blackWord} ${styles.myInformWord}`} >미디어 커뮤니케이션 학과</div>
            </div>
            <div className={styles.rightArrow}></div>
          </button>

        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.informTitleBox}>
          <p style={{ fontWeight: "700", marginBottom: "0px" }}>사용방법</p>
        </div>
        <div className={styles.useInformBox}>
          <button className={styles.useInformBtn}>
            <div className={styles.redWord2} style={{ fontWeight: "900" }} >세종스터디</div>
            <div style={{ fontWeight: "bold" }}>사용법</div>
          </button>
          <button className={styles.useInformBtn}>
            <div className={styles.redWord2} style={{ fontWeight: "900" }} >세종피어</div>
            <div style={{ fontWeight: "bold" }}>사용법</div>
          </button>
          <button className={styles.useInformBtn}>
            <div className={styles.redWord2} style={{ fontWeight: "900" }} >혼밥탈출</div>
            <div style={{ fontWeight: "bold" }}>사용법</div>
          </button>
        </div>
      </div>
      <div className={styles.container4}>
        <div className={styles.informTitleBox}>
          <p style={{ fontWeight: "700", marginBottom: "0px" }}>이용안내</p>
        </div>
        <div className={styles.ruleBox}>
          <div style={{ textDecoration: "underline" }}>개인정보처리방침</div>
          <div style={{ textDecoration: "underline" }}>이용약관</div>
          <div style={{ textDecoration: "underline" }}>커뮤니티 이용규칙</div>
          <div style={{ textDecoration: "underline" }}>공지사항</div>
        </div>
      </div>
      <button className={styles.logout}>
        <p style={{ fontWeight: "700", fontSize: "1.3em" }}>로그아웃</p>
      </button>
      <button className={styles.secession}>탈퇴하기</button>
    </div>
  );
};

export default MyPage;
