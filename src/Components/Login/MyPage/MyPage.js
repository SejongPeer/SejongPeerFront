import { useNavigate } from "react-router-dom";
import styles from "../MyPage/MyPage.module.css";
import Cookies from "js-cookie";

const MyPage = () => {
  const navigate = useNavigate();
  // const test = () => {
  //   return console.log("로그아웃 버튼입니다!");
  // };
  const deleteCookie = (name) => {
    Cookies.remove(name);
  };

  const handleLogout = () => {
    deleteCookie("session"); // 여기에 삭제할 쿠키의 이름을 넣는다
    alert("로그아웃 되었습니다!");
    navigate("/login");
  };

  const userId = localStorage.getItem("userId");
  const birth = localStorage.getItem("birth");
  const gender = localStorage.getItem("gender");
  const kakaoId = localStorage.getItem("kakaoId");
  const major = localStorage.getItem("major");
  const name = localStorage.getItem("name");
  const phoneNum = localStorage.getItem("phoneNum");
  const sejongEmail = localStorage.getItem("sejongEmail");
  const studentId = localStorage.getItem("studentId");

  return (
    <>
      <h2 className={styles.myInfo}>내 정보</h2>
      <div className={styles.logoutContainer}>
        <div className={styles.div1}>
          <p className={styles.leftFont}>아이디</p>
          <p className={styles.rightFont}>{userId}</p>
        </div>
        <div className={styles.div1}>
          <p className={styles.leftFont}>이메일</p>
          <p className={styles.rightFont}>{sejongEmail}</p>
        </div>
        <div className={styles.div1}>
          <p className={styles.leftFont}>카카오톡 아이디</p>
          <p className={styles.rightFont}>{kakaoId}</p>
        </div>
        <div className={styles.div1}>
          <p className={styles.leftFont}>전화번호</p>
          <p className={styles.rightFont}>{phoneNum}</p>
        </div>
        <div className={styles.div1}>
          <p className={styles.leftFont}>이름</p>
          <p className={styles.rightFont}>{name}</p>
        </div>
        <div className={styles.div1}>
          <p className={styles.leftFont}>생년월일</p>
          <p className={styles.rightFont}>{birth}</p>
        </div>
        <div className={styles.div1}>
          <p className={styles.leftFont}>성별</p>
          <p className={styles.rightFont}>{gender}</p>
        </div>
        <div className={styles.div1}>
          <p className={styles.leftFont}>단과대</p>
          <p className={styles.rightFont}>{major}</p>
        </div>
        <div className={styles.div1}>
          <p className={styles.leftFont}>학번</p>
          <p className={styles.rightFont}>{studentId} 학번</p>
        </div>
        <button className={styles.logoutButton} onClick={handleLogout}>
          <p className={styles.logoutFont}>로그아웃</p>
        </button>
      </div>
    </>
  );
};

export default MyPage;
