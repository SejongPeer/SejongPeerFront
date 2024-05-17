import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import style from '../AnimalApply4/AnimalApply4.module.css';

// 동물상 미팅 신청 1페이지
const AnimalApply4 = () => {
  const navigate = useNavigate();

  const [selectedGender, setSelectedGender] = useState(null); // 성별 상태 추가

  const handleGenderSelect = gender => {
    setSelectedGender(gender); // 성별 선택 핸들러
    localStorage.setItem('gender', gender); // 선택한 성별을 로컬스토리지에 저장하고 다음 화면에서 써먹어야함
  };

  const handleBack = () => {
    navigate(-1); // 뒤로 가기
  };

  const handleNext = () => {
    navigate('/fest/AnimalApply5'); // 다음 페이지로 이동
  };
  return (
    <div className={style.container1}>
      <h1>본인 성별 선택</h1>
      <div className={style.genderContainer}>
        <div
          className={`${style.genderOption} ${selectedGender === 'MALE' ? style.selected : ''}`}
          style={{
            border:
              selectedGender === 'MALE'
                ? '2px solid #ff4b4b'
                : '1px solid #e5e5e5',
          }}
          onClick={() => handleGenderSelect('MALE')}
        >
          <p>남자</p>
          {/* {selectedGender === '남자' && <span className="check-mark">✔</span>} */}
        </div>
        <div
          className={`${style.genderOption} ${selectedGender === 'FEMALE' ? style.selected : ''}`}
          style={{
            border:
              selectedGender === 'FEMALE'
                ? '2px solid #ff4b4b'
                : '1px solid #e5e5e5',
          }}
          onClick={() => handleGenderSelect('FEMALE')}
        >
          <p>여자</p>
          {/* {selectedGender === '여자' && <span className="check-mark">✔</span>} */}
        </div>
      </div>
      <div className={style.navigation}>
        <button onClick={handleBack} className={style.backButton}>
          뒤로
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedGender}
          className={selectedGender ? style.nextButtonActive : style.nextButton}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default AnimalApply4;
