import style from '../CSS/Finish.module.css';
import finishImg from '../../../../Assets/matchingFinish.png';
import { Link } from 'react-router-dom';

const MatchingFinish = () => {
    return <div className={style.container}>
        <div className={style.top}>
            <img className={style.img} src={finishImg} alt='img'/>
            <div className={style.title}>제출 완료!</div>
        </div>
        <div className={style.bottom}>
        <Link to='/buddy/ifcomplete'>
            <button className={style.btn2}>확인</button>
            </Link>
            <Link to='/main'>
            <button className={style.back}>메인 홈페이지로 이동</button>
            </Link>
        </div>
    </div>;
};

export default MatchingFinish;