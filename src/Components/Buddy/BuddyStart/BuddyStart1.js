import { useNavigate } from 'react-router-dom';
import buddyTextRed from '../../../Assets/buddyText2.png';
import buddyCat from '../../../Assets/honbobWaitingLogo.png';
import style from './BuddyStart.module.css';

const BuddyStart1 = () => {
  const navigate = useNavigate();
  const BuddyHandler = () => {
    navigate('/buddy/start2');
  };

  return (
    <div className={style.container}>
      <div className={style.top}>
        <img
          className={style.buddyText}
          src={buddyTextRed}
          alt='buddyTextRed'
        />
        <img className={style.buddyImg} src={buddyCat} alt='buddyCat' />
      </div>
      <div className={style.bottom}>
        <p className={style.text}>222명의 학생들이 버디를 찾고 있어요</p>
        <button onClick={BuddyHandler} className={style.btn1}>
          세종버디 시작
        </button>
      </div>
    </div>
  );
};

export default BuddyStart1;
