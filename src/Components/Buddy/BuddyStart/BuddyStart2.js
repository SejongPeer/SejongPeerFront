import { useNavigate } from 'react-router-dom';
import BuddyStart from '../../../Assets/buddyStart2.png';
import style from './BuddyStart.module.css';

const BuddyStart2 = () => {
  const navigate = useNavigate();

  const BuddyHandler = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + '/buddy/check-matching-status',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Refresh-Token': localStorage.getItem('refreshToken'),
          },
        }
      );
      const data = await response.json();
      console.log(data);
      console.log(data.message);
      console.log(data.data);
      //console.log(response.data);

      if (data.data === null || data.data.status === 'CANCEL') {
        navigate('/buddy/matching');
      } else if (data.data.status === "DENIED") {
        alert("상대가 매칭을 거절했습니다. 다시 신청해주세요.");
      } else if (data.data.status === "MATCHING_COMPLETED") {
        navigate('/buddy/success')
      } else if (data.data.status === "ACCEPT") {
        alert("신청 수락을 했습니다. 상대방이 수락할때까지 기다려 주세요.");
      } else if (data.data.status === "REJECT") {
        alert("거절 패널티 1시간이 부과되었습니다. 1시간 이후에 다시 신청해 주세요.");

      }

    } catch (error) {
      alert('에러가 발생했습니다.');
      console.log(error.message);
    }
  };

  const BackHandler = () => {
    navigate('/buddy/start1');
  };

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgBack}>
          <img className={style.buddyImg2} src={BuddyStart} alt="BuddyStart" />
        </div>
        <div className={style.wrapper}>
          <p className={style.title}>세종버디란?</p>
          <p className={style.text}>세종버디(Buddy)는</p>
          <p className={style.text}>
            <span className={style.text_red}>맞춤형 캠퍼스 짝꿍</span>을 찾는
            서비스입니다.
          </p>
          <p className={style.text2}>
            한명의 학우와 한 학기 동안 버디로 매칭 되며, 다음 학기에 새로운
            버디를 찾을 수 있습니다.
          </p>
        </div>
      </div>
      <div className={style.bottom}>
        <button onClick={BuddyHandler} className={style.btn2}>
          다음 페이지
        </button>
        <button onClick={BackHandler} className={style.back}>
          이전 페이지
        </button>
      </div>
    </div>
  );
};

export default BuddyStart2;
