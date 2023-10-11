import { useNavigate } from 'react-router-dom';
import logo from '../../../Assets/sejongpeer.png';
import style from './BuddyStart.module.css';

const BuddyStart2 = () => {
    const navigate = useNavigate();
    const BuddyHandler = () => {
        navigate('/buddy/start3');
    };
    const BackHandler = () => {
        navigate('/buddy/start1');
    };
    const sejongbuddy1 = '세종버디는 세종대 학우들이 다른 학우들과 교류할 수 있도록 연결해주는 서비스 입니다.'; 
    const sejongbuddy2 = '한 명의 학우와 매칭이 되며, 같은 학과뿐만 아니라 타학과 학우들과도 매칭이 가능합니다.';

    return <div className={style.container}>
        <div className={style.top}>

            <div className={style.flex}>
                <img className={style.logo} src={logo} alt='logo'/>
                <p className={style.title}>세종버디란?</p>
            </div>

            <div className={style.wrapper}>
                <p className={style.text2}>{sejongbuddy1}</p>
                <p className={style.text2}>{sejongbuddy2}</p>
            </div>
            
        </div>
        <div className={style.bottom}>
            <button onClick={BuddyHandler} className={style.btn2}>다음 페이지</button>
            <button onClick={BackHandler} className={style.back}>이전 페이지</button>
        </div>
    </div>;
};

export default BuddyStart2;