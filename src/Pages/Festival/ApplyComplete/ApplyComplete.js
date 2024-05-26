import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../ApplyComplete/ApplyComplete.module.css';

const ApplyComplete = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          navigate('/main');
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const goHome = () => {
    navigate('/main');
  };

  return (
    <div className={style.container}>
      <h2 className={style.alert}>신청 완료!</h2>
      <p>6시 이후에 매칭 결과가 문자로 전달됩니다 :)</p>
      <p style={{ fontWeight: 800, marginTop: '10px' }}>
        아래 이용방법을 반드시 확인해주세요!
      </p>
      <p style={{ marginTop: '20px', fontWeight: 800 }}>
        {countdown}초 후에 홈페이지로 돌아갑니다.
      </p>
      <div className={style.container3}>
        <button className={style.festUse}></button>
      </div>
      {/* <p
        href
        style={{
          textDecoration: 'underline',
          fontWeight: '700',
          cursor: 'pointer',
        }}
        onClick={goHome}
      >
        홈페이지로 돌아가기
      </p> */}
    </div>
  );
};

export default ApplyComplete;
