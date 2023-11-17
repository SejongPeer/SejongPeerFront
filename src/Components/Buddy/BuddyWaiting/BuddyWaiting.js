import style from "./BuddyWaiting.module.css";
import buddyTextRed from "../../../Assets/buddyTextRed.png";
import buddyWaitingLogo from "../../../Assets/buddyWaitingLogo.png";
import { useNavigate } from "react-router-dom";
const BuddyWaiting = ()=>{
    const navigate=useNavigate();
    const moveToMain=()=>{
        navigate("/main");
    }
    return(
        <div clsaaName={style.container}>
            <div className={style.TextBox}>
            <img src={buddyTextRed} className={style.buddyLogo}/>
            <p className={style.Text1}>216명의 학생들이 버디를 찾고 있어요!</p>
            <p className={style.ImgText}>열심히 찾는중...</p>
            <img src={buddyWaitingLogo} className={style.buddyWaitingImg} />
            </div>
    
            <div className={style.BtnBox}>
    
            <p className={style.Text3}>버디 매칭은 최대 4일 정도 소요됩니다.</p>
            <button className={style.moveToHomeBtn} onClick={moveToMain}>메인 페이지로 이동</button>
            <button className={style.cancelBtn}>버디 신청 취소</button>
            </div>
        </div>
    )
}

export default BuddyWaiting;