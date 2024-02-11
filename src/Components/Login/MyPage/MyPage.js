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
    <div className={styles.container1}>
      <p style={{ fontWeight: "700", marginBottom: "0px" }}>매칭정보</p>
      <div className={styles.container2}>
        <button className={styles.button}>
          <div className={styles.container3}>
            <p className={styles.word}>세종스터디</p>
            <p style={{ fontWeight: "700" }}>내 게시글 확인</p>
          </div>
          <div className={styles.rightImg}></div>
        </button>
      </div>
      <p style={{ fontWeight: "700", marginBottom: "0px" }}>내 정보</p>
      <div className={styles.container2}>
        <button className={styles.button} onClick={goModify}>
          <div className={styles.container3}>
            <p className={styles.word}>세종스터디</p>
            <p style={{ fontWeight: "700" }}>내 게시글 확인</p>
          </div>
          <div className={styles.rightImg}></div>
        </button>
      </div>
      <p style={{ fontWeight: "700", marginBottom: "0px" }}>사용방법</p>
      <div className={styles.container4}>
        <button className={styles.button2}>asd</button>
        <button className={styles.button2}>asd</button>
        <button className={styles.button2}>asd</button>
      </div>
      <p style={{ fontWeight: "700", marginBottom: "0px" }}>이용안내</p>
      <div>
        <p style={{ textDecoration: "underline" }}>개인정보처리방침</p>
        <p style={{ textDecoration: "underline" }}>이용약관</p>
        <p style={{ textDecoration: "underline" }}>커뮤니티 이용규칙</p>
        <p style={{ textDecoration: "underline" }}>공지사항</p>
      </div>
      <button className={styles.logout}>
        <p style={{ fontWeight: "700", fontSize: "1.3em" }}>로그아웃</p>
      </button>
    </div>
  );
};

export default MyPage;
