import { useNavigate } from 'react-router-dom';
import kakao from '../../../Assets/image/kakao.png';
import style from '../AnimalApply/AnimalApply.module.css';

// 동물상 미팅 신청 1페이지
const AnimalApply = () => {
  const navigate = useNavigate();

  const goApply = () => {
    navigate('/fest/AnimalApply2');
  };
  const goAnimalMatchingResult = () => {
    navigate('/fest/AnimalMatchInfo');
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
        <button className={style.festUse}></button>
        <button className={style.kakao}>
          <img src={kakao} alt="카카오톡 문의하기" />
          카카오톡 문의하기
        </button>
      </div>
    </div>
  );
};

export default AnimalApply;
