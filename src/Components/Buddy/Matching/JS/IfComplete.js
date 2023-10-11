import style from '../CSS/IfComplete.module.css';
import { useNavigate } from 'react-router-dom';
import buddyTextRed from '../../../../Assets/buddyTextRed.png';
import buddyFlower from '../../../../Assets/buddyFlower.png';

const IfComplete = (props) => {
    return <div className={style.container}>
        <div className={style.top}> 
            <img className={style.buddyText} 
            src={buddyTextRed} alt='buddyTextRed'/>
            <img className={style.buddyImg} 
            src={buddyFlower} alt='buddyFlower'/>
            <p className={style.text}>222명의 학생들이 버디를 찾고 있어요</p>
        </div>
        <div className={style.bottom}>
            <button className={style.btn1}>버디 정보 수정</button>
            <button className={style.btn2}>버디 신청 취소</button>
        </div>
    </div>;
};

export default IfComplete;