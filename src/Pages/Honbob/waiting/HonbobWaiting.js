import { MyContext } from '../../../App';
import { useState, useEffect, useContext } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import honbobWaitingLogo from '../../../assets/image/honbobWaitingImg.png';
import style from './HonbobWaiting.module.css';

const HonbobWaiting = () => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate('/main');
  };

  const honbobCancleSubmitHandler = async () => {
    const status = await checkMatchingStatus();
    // console.log(status);

    if (status) {
      alert('이미 매칭이 완료 되었습니다.');
      navigate('/honbob/success');
    } else {
      if (confirm('신청을 취소하시겠습니까?')) {
        try {
          const response = await fetch(
            process.env.REACT_APP_BACK_SERVER + '/honbab/cancel',
            {
              method: 'GET',
              body: JSON.stringify(),
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'Refresh-Token': localStorage.getItem('refreshToken'),
              },
            }
          );

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message);
          }

          alert('매칭 신청을 취소했습니다!');
          navigate('/main');
        } catch (error) {
          console.error(error.message);
          alert('오류가 발생했습니다.');
        }
      } else {
        alert('신청이 취소되지 않았습니다.');
      }
    }
  };

  // const [text,setText]=useState(['.','.','.']);
  const [dots, setDots] = useState('');

  //...출력
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDots(prev => (prev.length < 3 ? prev + '.' : ''));
  //   }, 400);

  //   return () => clearInterval(interval);
  // }, []);

  const checkMatchingStatus = async () => {
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
      // console.log('Status = ', data.data.status);
      return data.data.status === 'MATCHING_COMPLETED';
    } catch (error) {
      console.error('에러 체크:', error);
    }
  };

  // useEffect(() => {
  //   checkMatchingStatus();
  //   const intervalId = setInterval(() => checkMatchingStatus(), 3000); // 3초마다 확인 (맞게 조절)
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className={style.container}>
      <div className={style.TextBox}>
        <img src={honbobWaitingLogo} className={style.honbobWaitingImg} />
        <p className={style.Text1}>혼축탈출 동지 찾는 중{dots}</p>
        <p className={style.Text2}>
          <span className={style.Text2_span1}>*</span>
          <span className={style.Text2_span2}>
            신청 당일 00시~24시까지 매칭되며,
            <br />
            축제기간 동안 매일 새로운 동지를 찾을 수 있습니다.
          </span>
        </p>
      </div>

      <div className={style.BtnBox}>
        <p className={style.Text3}>
          매칭 시 동지의 카카오톡ID와 선호액티비티가 전달됩니다.
        </p>
        <button className={style.moveToHomeBtn} onClick={moveToMain}>
          홈페이지로 이동
        </button>
        <button className={style.cancelBtn} onClick={honbobCancleSubmitHandler}>
          대동지 취소
        </button>
      </div>
    </div>
  );
};

export default HonbobWaiting;
