import { Link, useNavigate } from 'react-router-dom';
import style from './MainPage.module.css';
import MainBuddy from './MainBuddy';
import MainHonbob from './MainHonbob';
import reprot from '../../../Assets/report.png';
import { useEffect, useState } from 'react';
import honbobUse from '../../../Assets/honbobUse.png';
import buddyUse from '../../../Assets/buddyUse.png';
import buddyButton from '../../../Assets/buddyButton.png';
import honbobButton from '../../../Assets/honbobButton.png';

const images = [honbobUse, buddyUse];

const MainPage = () => {
  const navigate = useNavigate();
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  const BuddyHandler = () => {
    if (refreshToken === null || accessToken === null) {
      alert('로그인 후 이용 가능한 서비스입니다!');
    } else {
      navigate('/buddy/start1');
    }
  };
  const HonbobHandler = () => {
    if (refreshToken === null || accessToken === null) {
      alert('로그인 후 이용 가능한 서비스입니다!');
    } else {
      navigate('/honbob/start1');
    }
  };
  const StudyHandler = () => {
    // navigate("/study");
    alert('4월 중 서비스 예정입니다!');
  };
  const reportUserHandler = () => {
    alert('너 신고');
  };
  // const readyHandler = () => {
  //   alert("준비중임");
  // }; _AgxobG

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIn(false); // Trigger the slide out animation
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        setSlideIn(true); // Reset to slide in the new image
      }, 200); // This should be less than your setInterval time
    }, 2000);

    return () => clearInterval(timer);
  }, []);

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

  const urls = [
    'https://sejonghonbab.simple.ink/', // 혼밥 이용방법
    'https://sejongbuddy.simple.ink/', // 세종버디 이용방법
  ];

  // 이미지 클릭 이벤트 핸들러, 인덱스에 해당하는 URL로 이동
  const onImageClick = index => {
    const url = urls[index];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div className={style.container}>
      <div
        style={{
          padding: '2vh',
        }}
      >
        <img
          className={style.useImg}
          src={images[currentImageIndex]}
          onClick={() => onImageClick(currentImageIndex)}
        ></img>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '5%',
            marginTop: '1vh',
          }}
        >
          <img
            src={buddyButton}
            className={style.btn1}
            onClick={BuddyHandler}
          ></img>
          <img
            src={honbobButton}
            className={style.btn1}
            onClick={HonbobHandler}
          ></img>
        </div>
        <div onClick={StudyHandler} className={style.studyBtn}>
          {/* <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginTop: "2vh",
            }}
          >
            <img src={sejongStudy2} className={style.sejongStudy2}></img>
            <p style={{ margin: "0 0 0 0.5vw", fontWeight: "800" }}>
              인생 팀원 구하기
            </p>
          </div>
          <div>
            <button style={{ width: "8vw", height: "8vw" }}></button>
          </div> */}
        </div>
      </div>
      <div className={style.report_user_box} onClick={kakaoChat}>
        <div className={style.reprot_icon}>
          <img src={reprot} alt="reprot" />
        </div>
        <span style={{ color: '#555', fontWeight: '800' }}>악성 유저 신고</span>
      </div>
      {/* <button className={style.btn} onClick={readyHandler}>
            <MainStudy />
        </button> */}
    </div>
  );
};

export default MainPage;
