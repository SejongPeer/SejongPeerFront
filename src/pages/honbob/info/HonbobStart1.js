import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import style from './HonbobStart.module.css';

const HonbobStart1 = () => {
  const [countHonbab, setCountHonbab] = useState(0);
  const navigate = useNavigate();
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      countHonbabHandler();
    }
  }, []);

  const HonbobHandler = async () => {
    navigate('/honbob/matching');
  };

  const infoHandler = () => {
    window.open('https://sejonghonbab.simple.ink/', '_blank');
  };

  const countHonbabHandler = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACK_SERVER + '/honbab/active-count',
        {
          method: 'GET',
        }
      );
      const data = await response.json();
      setCountHonbab(data.data.count);

      if (!response.ok) {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    countHonbabHandler();
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.InnerContainer}>
        <div className={style.top}>
          <button onClick={infoHandler} className={style.informBtn}>
            이용방법 확인 <div className={style.informImg}></div>
          </button>
        </div>
        <div className={style.middle}>
          <div className={style.honbobLogo}></div>
          <div className={style.informContext}>
            <div className={style.context1}>
              <b>혼밥탈출은 혼자 밥을 먹어야 하는</b>
            </div>
            <div className={style.context1}>
              <b>
                상황에 <span style={{ color: 'red' }}>밥짝꿍</span>을 찾는
                서비스입니다.
              </b>
            </div>
          </div>
          <div className={style.findContext}>
            <div className={style.raccoon}></div>{' '}
            <div>
              <b>
                <span style={{ fontWeight: '700' }}>{countHonbab}</span>명의
                학생들이 밥짝꿍을 찾고있어요!
              </b>
            </div>
          </div>
          <button className={style.submitBtn} onClick={HonbobHandler}>
            혼밥탈출 신청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default HonbobStart1;
