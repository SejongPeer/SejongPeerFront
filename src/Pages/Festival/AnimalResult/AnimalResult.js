import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../App';
import html2canvas from 'html2canvas';
import AnimalRatio from './AnimalRatio';

import style from './AnimalResult.module.css';
import AnimalInfo from './AnimalInfo';

const AnimalResult = () => {
  const captureRef = useRef(null); // useRef를 사용하여 DOM 요소 참조
  const navigate = useNavigate();
  const { animalType } = useContext(MyContext);

  // 메인 이동
  const goHome = () => {
    navigate('/main');
  };

  useEffect(() => {
    if (!animalType) {
      alert('불러온 정보가 없습니다. 다시 시도해주세요');
      navigate('/fest/animalcheck');
    }
  }, [animalType]);

  // 이미지 다운
  const captureElement = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const image = canvas.toDataURL('image/png');
      // 이미지 다운로드
      const link = document.createElement('a');
      link.download = '동물상결과.png';
      link.href = image;
      link.click();
    }
    capture();
  };

  const capture = () => {
    const storedImageUrl = localStorage.getItem('imgUrl');
    if (storedImageUrl) {
      const link1 = document.createElement('a');
      link1.href = storedImageUrl;
      link1.download = 'animal_photo.png';
      document.body.appendChild(link1); // 링크를 document에 추가
      link1.click();
      document.body.removeChild(link1); // 링크를 클릭 후 제거
    } else {
      console.error('Stored image URL is not available');
    }
  };

  return (
    <div className={style.container}>
      <div ref={captureRef} className={style.capture_container}>
        <div className={style.info}>
          <p>학술정보원 앞에 부스 위치 (09:00~16:00)</p>
        </div>
        <AnimalInfo type={animalType[0].animal} />
        <div className={style.wrapper}>
          <p className={style.title}>동물상 비율</p>
          <div className={style.ratio_container}>
            {animalType.slice(0, 6).map((animal, index) => (
              <AnimalRatio
                key={index}
                animal_name={animal.animal}
                animal_score={animal.score}
              />
            ))}
          </div>
        </div>
      </div>
      <button 
        onClick={captureElement}
        className={style.down_btn}>
        결과 다운받기
      </button>
      <p className={style.go_home} onClick={goHome}>
        홈페이지로 이동하기
      </p>
    </div>
  );
};

export default AnimalResult;
