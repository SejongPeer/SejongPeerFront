import style from "./BuddyWaiting.module.css";
import { useNavigate } from "react-router-dom";
import waitingCat from "../../../Assets/waitingCat.png"

const BuddyWaiting = ()=>{
    const navigate=useNavigate();
    const moveToMain=()=>{
        navigate("/main");
    }
    const buddyCancel = () => {
      let comfirmcancel = confirm("정말 매칭을 취소하시겠습니까?");
      if (comfirmcancel) {
        cancelBuddy();
      }
    }

    const cancelBuddy = async() => {
        try {
            const response = await fetch(
              process.env.REACT_APP_BACK_SERVER + "/buddy/cancel",
              {
                method: "GET",
                body: JSON.stringify(),
                headers: {
                  Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                  'Refresh-Token': localStorage.getItem('refreshToken'),
                },
              }
            );
      
            const data = await response.json(); // data 변수를 await로 초기화
            console.log(data.message);
      
            if (!response.ok) {
              throw new Error(data.message);
            }
      
            alert("버디 신청이 취소되었습니다.");
            console.log(data.message);
            navigate("/main");
          } catch (error) {
            console.error(error.message);
            console.log(error.message);
            alert("알 수 없는 오류가 발생했습니다.");
          }
    };

    return(
        <div className={style.container}>
            <div className={style.TextBox}>
              <p className={style.title}>세종버디</p>
              <p className={style.text1}>216명의 학생들이 버디를 찾고 있어요!</p>
              <img src={waitingCat} className={style.buddyWaitingImg} alt="waitingCat"/>
            </div>
    
            <div className={style.BtnBox}>
              <p className={style.text2}>버디를 찾으면 상대방의 정보(과, 학년) 확인 후 수락 / 거절할 수 있습니다!</p>
              <p className={style.text3}>* 거절 시 한 시간 버디이용 제한 패널티가 부여됩니다.</p>
              <button className={style.moveToHomeBtn} onClick={moveToMain}>메인 페이지로 이동</button>
              <button className={style.cancelBtn} onClick={buddyCancel}>버디 신청 취소</button>
            </div>
        </div>
    )
}

export default BuddyWaiting;
