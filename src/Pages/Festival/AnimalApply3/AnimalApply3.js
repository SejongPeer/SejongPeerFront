import { check } from 'prettier';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import checkBtn from '../../../assets/image/checkBtn.png';

import style from '../animalApply3/AnimalApply3.module.css';

// 동물상 미팅 신청 3페이지
const AnimalApply3 = () => {
  const navigate = useNavigate();
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  const handleMeetingSelect = meetingType => {
    setSelectedMeeting(meetingType); // 선택 시 체크 옵션을 보이도록 설정
    let meetingGroupType;
    if (meetingType === 1) {
      meetingGroupType = 'ONE_ON_ONE';
    } else if (meetingType === 2) {
      meetingGroupType = 'TWO_ON_TWO';
    } else if (meetingType === 3) {
      meetingGroupType = 'THREE_ON_THREE';
    }
    localStorage.setItem('MeetingGroupType', meetingGroupType); // 저장된 값이 1이면 1:1 미팅, 2면 2:2 미팅...
  };

  const handleBack = () => {
    navigate(-1); // 뒤로 가기
  };

  const handleNext = () => {
    navigate('/fest/AnimalApply4'); // 다음 페이지로 이동
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>미팅 인원 선택</h2>
      <div className={style.container2}>
        <div
          className={`meeting-option ${style.meetingOption} ${selectedMeeting === 1 ? 'selected' : ''}`}
          style={{
            border:
              selectedMeeting === 1 ? '2px solid #ff4b4b' : '1px solid #e5e5e5',
          }}
          onClick={() => handleMeetingSelect(1)}
        >
          <p className={style.meeting}>1:1 미팅</p>
          {selectedMeeting === 1 && (
            <img style={{ width: '2vh', height: '1.3vh' }} src={checkBtn}></img>
          )}
        </div>
        <div
          className={`meeting-option ${style.meetingOption} ${selectedMeeting === 2 ? 'selected' : ''}`}
          style={{
            border:
              selectedMeeting === 2 ? '2px solid #ff4b4b' : '1px solid #e5e5e5',
          }}
          onClick={() => handleMeetingSelect(2)}
        >
          <p className={style.meeting}>2:2 미팅</p>
          {selectedMeeting === 2 && (
            <img style={{ width: '2vh', height: '1.3vh' }} src={checkBtn}></img>
          )}
        </div>
        <div
          className={`meeting-option ${style.meetingOption} ${selectedMeeting === 3 ? 'selected' : ''}`}
          style={{
            border:
              selectedMeeting === 3 ? '2px solid #ff4b4b' : '1px solid #e5e5e5',
          }}
          onClick={() => handleMeetingSelect(3)}
        >
          <p className={style.meeting}>3:3 미팅</p>
          {selectedMeeting === 3 && (
            <img style={{ width: '2vh', height: '1.3vh' }} src={checkBtn}></img>
          )}
        </div>
      </div>
      <div className={style.navigation}>
        <button onClick={handleBack} className={style.backButton}>
          뒤로
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedMeeting}
          className={
            selectedMeeting ? style.nextButtonActive : style.nextButton
          }
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default AnimalApply3;
