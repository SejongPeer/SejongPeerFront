import { useState, useEffect } from 'react';
import styles from '../AnimalMatchResult/AnimalMatchResult.module.css';
import { ANIMAL_IMAGES } from '../Animals';
import { ANIMAL_TYPES } from '../AnimalTypes';

const AnimalMatchResult = () => {
  const [selfAnimalTypes, setSelfAnimalTypes] = useState([]);
  const [opponentAnimalTypes, setOpponentAnimalTypes] = useState([]);
  const [meetingGroupType, setMeetingGroupType] = useState('');
  const [kakaoLink, setKakaoLink] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = 11; // 테스트할 유저의 고유 ID
        const response = await fetch(
          `${process.env.REACT_APP_FEST_SERVER}/meeting/matching-result?userId=${userId}`
        );
        const data = await response.json();

        const gender = localStorage.getItem('gender'); // 로컬스토리지에서 gender 값을 가져옴
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

  const renderAnimalCards = animalTypes => {
    return animalTypes.map((animalType, index) => (
      <div key={index} className={styles.cardContainer2}>
        <div className={styles.card}>
          <img
            src={ANIMAL_IMAGES[animalType]}
            alt={ANIMAL_TYPES[animalType]}
            className={styles.animalImage}
          />
          <div className={styles.animalName}>{ANIMAL_TYPES[animalType]}</div>
        </div>
      </div>
    ));
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
