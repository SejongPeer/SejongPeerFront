import style from "./HonbobWaiting.module.css";
import honbobWaitingLogo from "../../../Assets/honbobWaitingImg.png";
import { MyContext } from "../../../App";
import { useState, useEffect, useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";

const HonbobWaiting = () => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/main");
  };

  const honbobCancleSubmitHandler = async () => {
    if(confirm('신청을 취소하시겠습니까?')) {
      try {
        const response = await fetch(
          process.env.REACT_APP_BACK_SERVER + "/honbab/cancel",
          {
            method: "GET",
            body: JSON.stringify(),
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Refresh-Token': localStorage.getItem('refreshToken'),
            },
          }
        );
  
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        alert("매칭 신청을 취소했습니다!");
        navigate("/main");
  
      } catch (error) {
        console.error(error.message);
        alert("오류가 발생했습니다.");
      }
    } else {
      alert("신청이 취소되지 않았습니다.");
    }
  };

  // const [text,setText]=useState(['.','.','.']);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.TextBox}>
        <img src={honbobWaitingLogo} className={style.honbobWaitingImg} />
        <p className={style.Text1}>밥짝꿍 찾는 중{dots}</p>
        <p className={style.Text2}>
          <span className={style.Text2_span1}>*</span>
          <span className={style.Text2_span2}>15분 동안 매칭</span>이 되며,
          <br />
          매칭 실패 시, 다시 신청할 수 있습니다.
        </p>
      </div>

      <div className={style.BtnBox}>
        <p className={style.Text3}>
          매칭 시 밥짝꿍의 카카오톡ID와 선호메뉴가 전달됩니다.
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
