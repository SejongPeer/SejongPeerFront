import { useState, useEffect } from 'react';
import styles from '../AnimalMatchResult/AnimalMatchResult.module.css';

// 이미지 파일을 직접 import
import M_Bear from '../../../Assets/Animals/M_Bear.png';
import M_Cat from '../../../Assets/Animals/M_Cat.png';
import M_Dino from '../../../Assets/Animals/M_Dino.png';
import M_Dog from '../../../Assets/Animals/M_Dog.png';
import M_Rabbit from '../../../Assets/Animals/M_Rabbit.png';
import M_Wolf from '../../../Assets/Animals/M_Wolf.png';
import W_Cat from '../../../Assets/Animals/W_Cat.png';
import W_Dear from '../../../Assets/Animals/W_Dear.png';
import W_DesertFox from '../../../Assets/Animals/W_DesertFox.png';
import W_Dog from '../../../Assets/Animals/W_Dog.png';
import W_Rabbit from '../../../Assets/Animals/W_Rabbit.png';

// 이미지 파일을 객체에 저장
const ANIMAL_IMAGES = {
  M_Bear,
  M_Cat,
  M_Dino,
  M_Dog,
  M_Rabbit,
  M_Wolf,
  W_Cat,
  W_Dear,
  W_DesertFox,
  W_Dog,
  W_Rabbit,
};

// 동물 타입 이름을 정의
const ANIMAL_TYPES = {
  BEAR: '곰',
  CAT: '고양이',
  DINO: '공룡',
  DOG: '강아지',
  RABBIT: '토끼',
  WOLF: '늑대',
  DEAR: '사슴',
  DESERT_FOX: '사막여우',
};

const AnimalMatchResult = () => {
  const [selfAnimalTypes, setSelfAnimalTypes] = useState([]);
  const [opponentAnimalTypes, setOpponentAnimalTypes] = useState([]);
  const [meetingGroupType, setMeetingGroupType] = useState('');
  const [kakaoLink, setKakaoLink] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // 테스트할 유저의 고유 ID
        const response = await fetch(
          `${process.env.REACT_APP_FEST_SERVER}/meeting/matching-result?userId=${userId}`
        );
        const data = await response.json();
        console.log(data);
        const gender = localStorage.getItem('gender'); // 로컬스토리지에서 gender 값을 가져옴
        setGender(gender);

        if (gender === 'MALE') {
          setSelfAnimalTypes(
            data.data.maleUsers.map(user => user.selfAnimalType)
          );
          setOpponentAnimalTypes(
            data.data.femaleUsers.map(user => user.selfAnimalType)
          );
        } else if (gender === 'FEMALE') {
          setSelfAnimalTypes(
            data.data.femaleUsers.map(user => user.selfAnimalType)
          );
          setOpponentAnimalTypes(
            data.data.maleUsers.map(user => user.selfAnimalType)
          );
        }

        setMeetingGroupType(data.data.meetingGroupType);
        setKakaoLink(data.data.kakaoLink);
      } catch (error) {
        console.error('Error fetching match result:', error);
      }
    };

    fetchData();
  }, []);

  const getAnimalImageKey = (animalType, isSelf) => {
    const prefix = isSelf
      ? gender === 'MALE'
        ? 'M'
        : 'W'
      : gender === 'MALE'
        ? 'W'
        : 'M';
    return `${prefix}_${animalType}`;
  };

  const renderAnimalCards = (animalTypes, isSelf) => {
    return animalTypes.map((animalType, index) => {
      const animalImageKey = getAnimalImageKey(animalType, isSelf);
      const animalImage = ANIMAL_IMAGES[animalImageKey];

      return (
        <div key={index} className={styles.cardContainer2}>
          <div className={styles.card}>
            <img
              src={animalImage}
              alt={ANIMAL_TYPES[animalType]}
              className={styles.animalImage}
            />
            <div className={styles.animalName}>{ANIMAL_TYPES[animalType]}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.cardContainer2}>
          <h2>본인 동물상</h2>
          <div className={styles.cardGroup}>
            {renderAnimalCards(selfAnimalTypes)}
          </div>
        </div>
        <div className={styles.cardContainer2}>
          <h2>상대 동물상</h2>
          <div className={styles.cardGroup}>
            {renderAnimalCards(opponentAnimalTypes)}
          </div>
        </div>
      </div>
      <button className={styles.chatButton}>오픈채팅 참여</button>
    </div>
  );
};

export default AnimalMatchResult;
