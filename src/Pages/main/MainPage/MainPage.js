import { Link, useNavigate } from 'react-router-dom';
import style from './MainPage.module.css';
import MainBuddy from './MainBuddy';
import MainHonbob from './MainHonbob';
import reprot from '../../../assets/image/report.png';
import { useContext, useEffect, useState } from 'react';
import honbobUse from '../../../assets/image/honbobUse.png';
import peerUse from '../../../assets/image/peerUse.png';
import buddyUse from '../../../assets/image/buddyUse.png';
import buddy_button from '../../../assets/image/buddy_button.png';
import honbobButton from '../../../assets/image/honbobButton.png';
import { MyContext } from '../../../App';

const images = [honbobUse, buddyUse, peerUse];

const MainPage = () => {
  const navigate = useNavigate();
  const refreshToken = localStorage.getItem('refreshToken');
  const accessToken = localStorage.getItem('accessToken');
  const { setBuddyCount } = useContext(MyContext);

  // 버디 상태 확인
  const BuddyHandler = async () => {
    if (refreshToken === null || accessToken === null) {
      alert('로그인 후 이용 가능한 서비스입니다!');
      navigate('/login');
    } else {
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
        console.log(data.data);

        if (data.data !== null) setBuddyCount(data.data.matchingCompletedCount);
        else setBuddyCount(0);

        //상태 관리
        if (data.data === null) {
          navigate('/buddy/start1');
        } else {
          statusHandler(data.data.status, data.data.matchingCompletedCount);
        }
      } catch (error) {
        alert('에러가 발생했습니다.');
        console.log(error.message);
      }
    }
  };

  //버디 - 상태에따른 처리
  const statusHandler = (status, count) => {
    //취소, 거절 패널티 해제
    if (status === 'CANCEL' || status === 'REACTIVATE') {
      if (count > 0) {
        navigate('/buddy/success');
      } else {
        navigate('/buddy/start1');
      }
      // 거절 당함
    } else if (status === 'DENIED') {
      alert('상대방이 거절했습니다. 다시 신청해 주세요.');
      if (count > 0) {
        navigate('/buddy/success');
      } else {
        navigate('/buddy/start1');
      }
      //매칭 최종 완료
    } else if (status === 'MATCHING_COMPLETED') {
      alert('매칭에 성공했습니다. 정보를 확인해주세요!');
      navigate('/buddy/success');
      //매칭 수락
    } else if (status === 'ACCEPT') {
      alert('신청 수락을 했습니다. 상대방이 수락할때까지 기다려 주세요.');
      //매칭 거절
    } else if (status === 'REJECT') {
      alert(
        '거절 패널티 1시간이 부과되었습니다. 1시간 이후에 다시 신청해 주세요.'
      );
      //매칭 중
    } else if (status === 'IN_PROGRESS') {
      alert('매칭중입니다!');
      navigate('/buddy/waiting');
      //매칭 완료
    } else if (status === 'FOUND_BUDDY') {
      alert('버디를 찾았습니다!');
      navigate('/buddy/accept');
    }
  };

  //혼밥 상태 확인
  const HonbobHandler = async () => {
    if (refreshToken === null || accessToken === null) {
      alert('로그인 후 이용 가능한 서비스입니다!');
      navigate('/login');
    } else {
      try {
        const response = await fetch(
          process.env.REACT_APP_BACK_SERVER + '/honbab/check-matching-status',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Refresh-Token': localStorage.getItem('refreshToken'),
            },
          }
        );
        if (!response.ok) {
          throw new Error('Network response was not ok'); // 응답 상태가 좋지 않을 경우 에러를 발생시킴
        }
        const data = await response.json(); // 주석 해제하여 JSON 응답을 파싱

        if (data.data === null || data.data.status === 'CANCEL') {
          navigate('/honbob/start1');
        } else if (
          data.data.status === 'TIME_OUT' ||
          data.data.status === 'EXPIRED'
        ) {
          navigate('/honbob/start1');
        } else if (data.data.status === 'IN_PROGRESS') {
          alert('매칭 중입니다!');
          navigate('/honbob/waiting');
        } else if (data.data.status === 'MATCHING_COMPLETED') {
          alert('매칭에 성공했습니다!');
          navigate('/honbob/success');
        }
      } catch (error) {
        console.error('에러 체크:', error);
        alert('매칭 체크 실패!');
      }
    }
  };

  const StudyHandler = () => {
    // navigate("/study");
    alert('4월 중 서비스 예정입니다!');
  };
  const reportUserHandler = () => {
    alert('너 신고');
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIn(false);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        setSlideIn(true);
      }, 200);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const urls = [
    'https://sejonghonbab.simple.ink/', // 혼밥 이용방법
    'https://sejongbuddy.simple.ink/', // 세종버디 이용방법
    'https://sejongpeer.simple.ink/', // FAQ
  ];

  // 이미지 클릭 이벤트 핸들러, 인덱스에 해당하는 URL로 이동
  const onImageClick = index => {
    const url = urls[index];
    if (url) {
      window.open(url, '_blank');
    }
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
            src={buddy_button}
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
