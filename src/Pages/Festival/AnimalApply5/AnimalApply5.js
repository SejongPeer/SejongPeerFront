import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from '../AnimalApply5/AnimalApply5.module.css';

// 동물상 미팅 신청 1페이지
const AnimalApply5 = () => {
  const navigate = useNavigate();

  const [meetingType, setMeetingType] = useState(null);
  const [forms, setForms] = useState([]);
  const [gender, setGender] = useState(null);
  const [gender1, setGender1] = useState(null);

  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 미팅 유형 및 성별을 가져와 상태를 설정
    const savedMeetingType = localStorage.getItem('미팅 인원 선택');
    const savedGender = localStorage.getItem('selectedGender');
    if (savedMeetingType) {
      setMeetingType(savedMeetingType);
      setForms(Array(parseInt(savedMeetingType)).fill(null));
    }
    if (savedGender) {
      setGender(savedGender);
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

  // 성별에 따른 동물상 옵션
  const getAnimalOptions = gender => {
    if (gender === '여자') {
      return ['강아지', '고양이', '토끼', '공룡', '곰', '늑대'];
    } else if (gender === '남자') {
      return ['강아지', '고양이', '토끼', '사막여우', '사슴', '햄스터'];
    }
    return []; // 기본적으로 빈 배열 반환
  };

  // 성별에 따른 동물상 옵션
  const getAnimalOptions1 = gender1 => {
    if (gender1 === '남자') {
      return ['강아지', '고양이', '토끼', '공룡', '곰', '늑대'];
    } else if (gender1 === '여자') {
      return ['강아지', '고양이', '토끼', '사막여우', '사슴', '햄스터'];
    }
    return []; // 기본적으로 빈 배열 반환
  };

  // 폼의 개수에 따라 컨테이너 높이 계산
  const formHeight = 436; // 각 폼의 높이
  const totalHeight = forms.length * formHeight + 200; // 전체 높이는 폼 높이의 합 + 여분의 여백

  return (
    <div className={style.container} style={{ height: `${totalHeight}px` }}>
      {/* <h1>미팅 유형: {meetingType}</h1> */}
      {forms.map((_, index) => (
        <div key={index}>
          <p className={style.student}>학생 {index + 1}</p>
          <div className={style.form}>
            <div className={style.formGroup}>
              <label>본인 동물상</label>
              <select
                className={style.input}
                onChange={e =>
                  handleChange(index, 'animalType', e.target.value)
                }
                defaultValue=""
              >
                <option value="" disabled>
                  AI 측정 본인 동물상 선택
                </option>
                {getAnimalOptions1(gender).map(animal => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
              </select>
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
            <div>
              <label>원하는 동물상</label>
              <div className={style.formGroup1}>
                <select
                  className={style.input}
                  onChange={e =>
                    handleChange(index, 'preferredAnimal', e.target.value)
                  }
                  defaultValue=""
                >
                  <option value="" disabled>
                    1순위 선택
                  </option>
                  {getAnimalOptions(gender).map(animal => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
                <select
                  className={style.input}
                  onChange={e =>
                    handleChange(index, 'preferredAnimal', e.target.value)
                  }
                  defaultValue=""
                >
                  <option value="" disabled>
                    2순위 선택
                  </option>
                  {getAnimalOptions(gender).map(animal => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className={style.apply}>동물상 미팅 신청하기</button>
    </div>
  );
};

export default AnimalApply5;
