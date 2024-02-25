import styles from "../Modify/Modify.module.css";
import { useState, useEffect } from "react";

const Modify = () => {
  const [focusedDiv, setFocusedDiv] = useState(null);
  const [myPageData, setMyPageData] = useState(1);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));

  const [newNickName, setNewNickName] = useState("");
  const [newKaKaoId, setNewKaKaoId] = useState("");
  const [newPhoneNum, setNewPhoneNum] = useState("");

  //수정 안하고 넘길때 기존 값으로 초기화해주기
  const handleNickName = (e) => {
    setNewNickName(e.target.value);
  }

  const handleKaKaoId = (e) => {
    setNewKaKaoId(e.target.value);
  }

  const handlePhoneNum = (e) => {
    setNewPhoneNum(e.target.value);
  }


  // useEffect(() => {
  //   console.log("nick : ", newNickName);

  // }, [newNickName]);

  // useEffect(() => {
  //   const getDate = async (e) => {
  //     try {
  //       const response = await fetch(
  //         process.env.REACT_APP_BACK_SERVER + "/member/my-page",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             'Authorization': `Bearer ${accessToken}`,
  //             'Refresh-Token': `Bearer ${refreshToken}`,
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         const errorData = await response.json(); // 오류 응답을 처리합니다.
  //         throw new Error(data.message);
  //       }

  //       const data = await response.json(); // data 변수를 await로 초기화
  //       setMyPageData(data.data);
  //       console.log(data.data);

  //     } catch (error) {
  //       console.error("Error occurred:", error);
  //       console.error(error.message);
  //       alert(error.message);
  //       e.preventDefault();
  //     }
  //   };
  //   getDate();
  // }, []);



  const handleInputFocus = (divId) => {
    setFocusedDiv(divId);
  };

  const handleInputBlur = () => {
    setFocusedDiv(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const KaKaoId = newKaKaoId !== "" ? newKaKaoId : myPageData.kakaoAccount;
    const PhoneNum = newPhoneNum !== "" ? newPhoneNum : myPageData.phoneNumber;
    const NickName = newNickName !== "" ? newNickName : myPageData.nickName;

    let modifyData = {

    };

  }

  return (
    <div className={styles.ContainerBox}>
      {myPageData && (
        <div className={styles.outerContainer}>
          <div className={styles.container1}>
            <div className={styles.informTitleBox}>
              <div style={{ fontWeight: "700", marginBottom: "0px" }}>정보 수정</div>
              <div style={{ color: "#ff4b4b", fontSize: "1.5vh", fontWeight: "700" }}>*각 정보 클릭 시, 수정 가능</div>
            </div>
            <div className={styles.myInformBox}>
              <div className={`${focusedDiv === 'nickName' ? styles.focused : styles.myInformDiv}`}>
                <div className={styles.myInformName}>닉네임</div>
                <input className={styles.myInformInput} placeholder="세종냥이"
                  onFocus={() => handleInputFocus('nickName')}
                  onChange={handleNickName}
                  onBlur={() => handleInputFocus(null)}
                ></input>
              </div>

              <div className={`${focusedDiv === 'kakaoId' ? styles.focused : styles.myInformDiv}`}>
                <div className={styles.myInformName}>카카오톡 아이디</div>
                <input className={styles.myInformInput} placeholder="세종냥이"
                  onFocus={() => handleInputFocus('kakaoId')}
                  onChange={handleKaKaoId}
                  onBlur={() => handleInputFocus(null)}
                ></input>
              </div>
              <div className={`${focusedDiv === 'phoneNum' ? styles.focused : styles.myInformDiv}`}>
                <div className={styles.myInformName}>전화번호</div>
                <input className={styles.myInformInput} placeholder="세종냥이"
                  onFocus={() => handleInputFocus('phoneNum')}
                  onChange={handlePhoneNum}
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
              <div style={{ fontWeight: "600", color: "#555555" }}>소프트웨어학과 · 3학년</div>
            </div>
          </div>

          <button className={styles.modify} onClick={handleSubmit}>
            <p style={{ fontWeight: "400", fontSize: "1.3em" }}>수정하기</p>
          </button>
        </div>
      )}
    </div>
  );

};

export default Modify;
