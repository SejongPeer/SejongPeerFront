import { useNavigate } from 'react-router-dom';
import buddyStart1 from "../../../Assets/buddyStart1.png"
import style from './BuddyStart.module.css';

const BuddyStart1 = () => {
  const navigate = useNavigate();
  const BuddyHandler = () => {
    navigate('/buddy/start2');
  };

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.inform_con}>
          <button className={style.informBtn}>
            이용방법 확인 <div className={style.informImg}></div>
          </button>
        </div>

        <img className={style.buddyImg} src={buddyStart1} alt='buddyStart1' />
        <p className={style.explain}>캠퍼스 짝꿍이 필요할 땐?</p>
        <p className={style.sejongbuddy}>세종버디</p>
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
