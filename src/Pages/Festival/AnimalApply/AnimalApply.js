import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import kakao from '../../../assets/image/kakao.png';
import style from '../animalApply/AnimalApply.module.css';

// 동물상 미팅 신청 1페이지
const AnimalApply = () => {
  const navigate = useNavigate();

  const goApply = () => {
    navigate('/fest/AnimalApply2');
  };
  const goAnimalMatchingResult = () => {
    navigate('/fest/AnimalMatchInfo');
  };

  const goBanner = () => {
    window.open('https://animalmeeting.simple.ink/', '_blank');
  };

  useEffect(() => {
    if (window.Kakao) {
      const script = document.createElement('script');
      script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
      script.onload = () => {
        const key = process.env.REACT_APP_KAKAO_KEY;
        window.Kakao.init(key);
      };
      document.head.appendChild(script);
    }
  }, []);

  const kakaoChat = () => {
    if (window.Kakao) {
      window.Kakao.Channel.chat({
        channelPublicId: '_AgxobG', // 여기에 채널의 고유 ID를 입력하세요.
      });
    }
  };
  return (
    <div className={style.container1}>
      <h1>동물상형 미팅</h1>
      <div className={style.container2}>
        <button className={style.apply} onClick={goApply}>
          동물상 미팅 신청하기
        </button>
        <button className={style.apply} onClick={goAnimalMatchingResult}>
          매칭 결과 확인하기
        </button>
      </div>
      <div className={style.container3}>
        <button className={style.festUse} onClick={goBanner}></button>
        <button className={style.kakao} onClick={kakaoChat}>
          <img src={kakao} alt="카카오톡 문의하기" />
          카카오톡 문의하기
        </button>
      </div>
    </div>
  );
};

export default AnimalApply;
