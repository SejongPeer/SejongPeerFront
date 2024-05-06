import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from '../AnimalApply5/AnimalApply5.module.css';

// 동물상 미팅 신청 1페이지
const AnimalApply4 = () => {
  const navigate = useNavigate();

  const [meetingType, setMeetingType] = useState(null);
  const [forms, setForms] = useState([]);

  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 미팅 유형을 가져와 상태를 설정
    const savedMeetingType = localStorage.getItem('미팅 인원 선택');
    if (savedMeetingType) {
      setMeetingType(savedMeetingType);
      setForms(Array(parseInt(savedMeetingType)).fill(null));
    }
  }, []);

  const handleChange = (index, field, value) => {
    const newForms = forms.map((form, i) => {
      if (i === index) {
        return { ...form, [field]: value };
      }
      return form;
    });
    setForms(newForms);
  };

  return (
    <div className={style.container}>
      {/* <h1>미팅 유형: {meetingType}</h1> */}
      {forms.map((_, index) => (
        <div key={index}>
          <h3>학생 {index + 1}</h3>
          <div className={style.form}>
            <div className={style.formGroup}>
              <label>본인 동물상</label>
              <input
                type="text"
                className={style.input}
                onChange={e =>
                  handleChange(index, 'animalType', e.target.value)
                }
                placeholder="AI 측정 본인 동물상 선택"
              />
            </div>
            <div className={style.formGroup}>
              <label>이름</label>
              <input
                type="text"
                className={style.input}
                onChange={e => handleChange(index, 'name', e.target.value)}
                placeholder="이름 입력"
              />
            </div>
            <div className={style.formGroup}>
              <label>전화번호</label>
              <input
                type="text"
                className={style.input}
                onChange={e =>
                  handleChange(index, 'phoneNumber', e.target.value)
                }
                placeholder="전화번호 - 없이 입력"
              />
            </div>
            <div className={style.formGroup}>
              <label>원하는 동물상</label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  className={style.input}
                  onChange={e =>
                    handleChange(index, 'preferredAnimal1', e.target.value)
                  }
                  placeholder="1순위 선택"
                />
                <input
                  type="text"
                  className={style.input}
                  onChange={e =>
                    handleChange(index, 'preferredAnimal2', e.target.value)
                  }
                  placeholder="2순위 선택"
                />
              </div>
            </div>
            {/* <div className={style.formGroup}>
              <label>원하는 동물상 2순위:</label>
              <input
                type="text"
                className={style.input}
                onChange={e =>
                  handleChange(index, 'preferredAnimal2', e.target.value)
                }
              />
            </div> */}
          </div>
        </div>
      ))}
      <button className={style.apply}>동물상 미팅 신청하기</button>
    </div>
  );
};

export default AnimalApply4;
