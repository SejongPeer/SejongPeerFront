import style from "./BuddyWaiting.module.css";
import buddyTextRed from "../../../Assets/buddyTextRed.png";
import buddyWaitingLogo from "../../../Assets/buddyWaitingLogo.png";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from 'react';
const BuddyWaiting = ()=>{
    const navigate=useNavigate();
    const moveToMain=()=>{
        navigate("/main");
    }
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

    const [dots, setDots] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        setDots(prev => (prev.length < 3 ? prev + '.' : ''));
      }, 400); 

      return () => clearInterval(interval); 
    }, []);
    return(
        <div className={style.container}>
            <div className={style.TextBox}>
            <img src={buddyTextRed} className={style.buddyLogo}/>
            <p className={style.Text1}>216명의 학생들이 버디를 찾고 있어요!</p>
            <p className={style.ImgText}>열심히 찾는중{dots}</p>
            <img src={buddyWaitingLogo} className={style.buddyWaitingImg} />
            </div>
    
            <div className={style.BtnBox}>
    
            <p className={style.Text3}>버디 매칭은 최대 4일 정도 소요됩니다.</p>
            <button className={style.moveToHomeBtn} onClick={moveToMain}>메인 페이지로 이동</button>
            <button className={style.cancelBtn} onClick={cancelBuddy}>버디 신청 취소</button>
            </div>
        </div>
    )
}

export default BuddyWaiting;
