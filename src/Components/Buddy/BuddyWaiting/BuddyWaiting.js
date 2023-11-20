import style from "./BuddyWaiting.module.css";
import buddyTextRed from "../../../Assets/buddyTextRed.png";
import buddyWaitingLogo from "../../../Assets/buddyWaitingLogo.png";
import { useNavigate } from "react-router-dom";
const BuddyWaiting = ()=>{
    const navigate=useNavigate();
    const moveToMain=()=>{
        navigate("/main");
    }
    const randomNum = Math.floor(Math.random() * 10 + 1);
    const text = "버디 매칭은 최대 2일 정도 소요됩니다.\n 버디 매칭 성공시, 문자로 발송됩니다.";
    const text1 = "버디 매칭은 "
    const text2 = ""
    const cancelBuddy = async() => {
        try {
            const response = await fetch(
              process.env.REACT_APP_BACK_SERVER + "/buddy/cancel",
              {
                method: "POST",
                body: JSON.stringify(),
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
      
            alert(data.message);
            console.log(data.message);
            navigate("/main");
          } catch (error) {
            console.error(error.message);
            alert(error.message);
          }
    };
    return(
        <div className={style.container}>
            <div className={style.TextBox}>
            <img src={buddyTextRed} className={style.buddyLogo}/>
            <p className={style.Text1}>{randomNum}명의 학생들이 버디를 찾고 있어요!</p>
            <p className={style.ImgText}>열심히 찾는중...</p>
            <img src={buddyWaitingLogo} className={style.buddyWaitingImg} />
            </div>
    
            <div className={style.BtnBox}>
              <p className={style.Text3}>버디 매칭은 <span className={style.text4}>최대 2일</span> 정도 소요됩니다.</p>
              <p className={style.Text3}>버디 매칭 성공시, <span className={style.text4}>문자로 발송</span>됩니다.</p>
              <button className={style.moveToHomeBtn} onClick={moveToMain}>메인 페이지로 이동</button>
              <button className={style.cancelBtn} onClick={cancelBuddy}>버디 신청 취소</button>
            </div>
        </div>
    )
}

export default BuddyWaiting;