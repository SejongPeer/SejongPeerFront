import style from './BuddyAccept.module.css';
import findBuddy from '../../../Assets/findBuddy.png';
import { useEffect, useRef, useState } from 'react';

const BuddyAccept = () => {
  const [isAccept, setIsAccept] = useState('');
  const isFirstRender = useRef(true);

  // 버튼클릭 핸들러
  const acceptClick = () => {
    setIsAccept(true);
    setIsAccept(true);
  };
  const declineClick = () => {
    setIsAccept(true);
    setIsAccept(false);
  };

  //상태변환
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      acceptHandler(isAccept);
    }
  }, [isAccept]);

  //확인/전송
  const acceptHandler = accept => {
    console.log(accept);
    if (accept) {
      if (confirm('매칭을 수락하시겠습니까?')) {
        console.log('수락');
        sendResult(true);
      } else {
        setIsAccept('')
      }
    } else if (accept === false) {
      if (confirm('매칭을 거절하시겠습니까?')) {
        console.log('거절');
        sendResult(false);
      } else {
        setIsAccept('')
      }
    }
  };

  // 통신
  const sendResult = (accept) => {
    let acceptInfo = {
        isAccept : accept
    }
    fetch(process.env.REACT_APP_BACK_SERVER + '/buddyMatching/status', {
        method: 'POST',
        body: JSON.stringify(acceptInfo),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Refresh-Token': localStorage.getItem('refreshToken'),
        }
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error => console.error('Error:', error));
  }

  return (
    <div className={style.container}>
      <p className={style.title}>버디를 찾았습니다!</p>
      <img className={style.find_buddy} src={findBuddy} alt="findBuddy" />

      <div className={style.info_box}>
        <span className={style.info}>미디어커뮤니케이션학과</span>
        <div className={style.dot}></div>
        <span className={style.info}>3학년</span>
      </div>

      <div>
        <p className={style.explain}>서로 수락하면 매칭 상대에게</p>
        <p className={style.explain}>이름과 카카오톡ID가 추가로 전달 됩니다!</p>
      </div>

      <div className={style.btn_box}>
        <button onClick={declineClick} className={style.decline_btn}>
          거절하기
        </button>
        <button onClick={acceptClick} className={style.accept_btn}>
          수락하기
        </button>
      </div>
    </div>
  );
};

export default BuddyAccept;
