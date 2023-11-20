import style from "./HonbobWaiting.module.css";
import hohbobWaitingLogo from "../../../Assets/honbobWaitingLogo.png";
import { MyContext } from "../../../App";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const HonbobWaiting = () => {
  //const [kakaohonbob, setKakao] = useState("");
  const { KaKaoDD, setKaKaoDD } = useContext(MyContext);
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/main");
  };
  const honbobCancleSubmitHandler = async () => {
    let findCancleInfo = {
      kakaoId: KaKaoDD,
    };

    // console.log("혼밥웨이팅js에서 KaKaoDD : " + KaKaoDD);

    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + "/honbob/cancel",
        {
          method: "POST",
          body: JSON.stringify(findCancleInfo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data.message);
      alert(data.message);

      alert("혼밥취소 제출 성공");
      console.log("혼밥취소 제출 성공");

      //setHonbobCancleSubmit(false);

      navigate("/main");
    } catch (error) {
      console.error("에러 발생", error);
      console.log("신청취소실패");
      console.error(error.message);
      alert(error.message);
    }
  };
  
  return (
    <div className={style.container}>
      <div className={style.TextBox}>
        <img src={hohbobWaitingLogo} className={style.honbobWaitingImg} />
        <p className={style.Text1}>밥짝꿍 찾는 중...</p>
        <p className={style.Text2}>
          <span className={style.Text2_span1}>*</span>
          <span className={style.Text2_span2}>15분 동안 매칭</span>이 되며,
          <br />
          매칭 실패 시, 다시 신청할 수 있습니다.
        </p>
      </div>

      <div className={style.BtnBox}>
        <p className={style.Text3}>
          매칭 시,메시지로 상대방의 정보가 전달됩니다.
        </p>
        <button className={style.moveToHomeBtn} onClick={moveToMain}>
          홈페이지로 이동
        </button>
        <button className={style.cancelBtn} onClick={honbobCancleSubmitHandler}>
          혼밥탈출 취소
        </button>
      </div>
    </div>
  );
};

export default HonbobWaiting;
