import styles from "../MyPage/MyPage.module.css";

const MyPage = () => {
  const test = () => {
    return console.log("로그아웃 버튼입니다!");
  };
  return (
    <div className={styles.logoutContainer}>
      <div className={styles.div1}>
        <p>아이디</p>
        <p>sejonge</p>
      </div>
      <div className={styles.div1}>
        <p>이메일</p>
        <p>sejongpeer@sejong.ac.kr</p>
      </div>
      <div className={styles.div1}>
        <p>카카오톡 아이디</p>
        <p>sejongsejong</p>
      </div>
      <div className={styles.div1}>
        <p>전화번호</p>
        <p>01012345678</p>
      </div>
      <button className={styles.logoutButton} onClick={test}>
        로그아웃
      </button>
    </div>
  );
};

export default MyPage;
