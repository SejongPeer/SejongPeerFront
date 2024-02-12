import styles from "../Modify/Modify.module.css";
import { useState } from "react";

const Modify = () => {
  const [focusedDiv, setFocusedDiv] = useState(null);

  const handleInputFocus = (divId) => {
    setFocusedDiv(divId);
  };

  const handleInputBlur = () => {
    setFocusedDiv(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.informTitleBox}>
          <div style={{ fontWeight: "700", marginBottom: "0px" }}>정보 수정</div>
          <div style={{ color: "#ff4b4b", fontSize: "1.5vh", fontWeight: "700" }}>*각 정보 클릭 시, 수정 가능</div>
        </div>
        <div className={styles.myInformBox}>
          <div className={`${focusedDiv === 'nickName' ? styles.focused : styles.myInformDiv}`}>
            <div className={styles.myInformName}>닉네임</div>
            <input className={styles.myInformInput} placeholder="학정냥이"
              onFocus={() => handleInputFocus('nickName')}
              onBlur={() => handleInputFocus(null)}
            ></input>
          </div>
          <div className={`${focusedDiv === 'Id' ? styles.focused : styles.myInformDiv}`}>
            <div className={styles.myInformName}>아이디</div>
            <input className={styles.myInformInput} placeholder="jesse823"
              onFocus={() => handleInputFocus('Id')}
              onBlur={() => handleInputFocus(null)}
            ></input>
          </div>
          <div className={`${focusedDiv === 'kakaoId' ? styles.focused : styles.myInformDiv}`}>
            <div className={styles.myInformName}>카카오톡 아이디</div>
            <input className={styles.myInformInput} placeholder="sejongsejong"
              onFocus={() => handleInputFocus('kakaoId')}
              onBlur={() => handleInputFocus(null)}
            ></input>
          </div>
          <div className={`${focusedDiv === 'phoneNum' ? styles.focused : styles.myInformDiv}`}>
            <div className={styles.myInformName}>전화번호</div>
            <input className={styles.myInformInput} placeholder="01012345678"
              onFocus={() => handleInputFocus('phoneNum')}
              onBlur={() => handleInputFocus(null)}
            ></input>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.informTitleBox}>
          <div style={{ fontWeight: "700", marginBottom: "0px" }}>내 학과</div>
          <div style={{ color: "#ff4b4b", fontSize: "1.5vh", fontWeight: "700" }}>*학과 정보는 새로운 학기에 수정 가능합니다.</div>
        </div>
        <div className={styles.departBox}>
          <div style={{ fontWeight: "600" }}>소프트웨어학과</div>
        </div>
      </div>

      <button className={styles.modify}>
        <p style={{ fontWeight: "400", fontSize: "1.3em" }}>수정하기</p>
      </button>
    </div>
  );
};

export default Modify;
