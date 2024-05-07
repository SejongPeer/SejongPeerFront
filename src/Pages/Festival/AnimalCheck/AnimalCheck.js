import { useState } from 'react';

import style from './AnimalCheck.module.css'

const AnimalCheck = () => {
    const [personalInfoChecked, setPersonalInfoChecked] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  // 버튼 활성화 여부를 결정하는 함수
  const isButtonActive = personalInfoChecked && verificationCode.length === 4;

  return (
    <div className={style.container}>
      <div
        style={{
          width: '30vh',
          height: '30vh',
          backgroundColor: '#FF4B4B',
          marginBottom: '2vh',
          borderRadius: '20px',
        }}
      ></div>
      <p style={{ marginTop: '4vh' }} className={style.p}>
        고유번호 입력
      </p>
      <input
        type="text"
        placeholder="등록시 입력한 학번을 입력해 주세요"
        value={verificationCode}
        onChange={e => setVerificationCode(e.target.value)}
        maxLength="8"
        className={style.certificationNum}
      />
      <button
        style={{
          backgroundColor: isButtonActive ? '#FF4B4B' : '#F3F3F3',
          color: isButtonActive ? '#FFFFFF' : '#111',
        }}
        className={style.apply}
        disabled={!isButtonActive}
      >
        <p className={style.p}>결과 확인</p>
      </button>
    </div>
  );
}

export default AnimalCheck;