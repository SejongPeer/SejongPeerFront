import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useContext } from 'react-router-dom';

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

  const setTemporaryData = gender => {
    if (gender === 'MALE') {
      setSelfAnimalTypes(['DOG', 'DOG', 'DOG']);
      setOpponentAnimalTypes(['DOG', 'DOG', 'DOG']);
    } else if (gender === 'FEMALE') {
      setSelfAnimalTypes(['DOG', 'DOG', 'DOG']);
      setOpponentAnimalTypes(['DOG', 'DOG', 'DOG']);
    }
    setMeetingGroupType('THREE_ON_THREE');
    setKakaoLink(null);

    console.log('Temporary selfAnimalTypes:', ['DOG', 'DOG', 'DOG']);
    console.log('Temporary opponentAnimalTypes:', ['DOG', 'DOG', 'DOG']);
    console.log('ANIMAL_TYPES[selfAnimalTypes[0]]:', ANIMAL_TYPES['DOG']);
  };

  useEffect(() => {
    const gender = localStorage.getItem('gender');
    setGender(gender);
    setTemporaryData(gender);
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
        <CardContainer2 key={index}>
          <Card>
            <AnimalImage src={animalImage} alt={ANIMAL_TYPES[animalType]} />
            <AnimalName>{ANIMAL_TYPES[animalType]}상~!</AnimalName>
          </Card>
        </CardContainer2>
      );
    });
  };

  return (
    <Container>
      <CardContainer>
        <CardContainer2>
          <Title>본인 동물상</Title>
          <AnimalBox>
            <AnimalImage src={M_Dog} alt={ANIMAL_TYPES[selfAnimalTypes[0]]} />
            <AnimalBoxText>
              {ANIMAL_TYPES[selfAnimalTypes[0]]}강아지상
            </AnimalBoxText>
          </AnimalBox>
          <CardGroup>
            {renderAnimalCards(selfAnimalTypes.slice(1), true)}
          </CardGroup>
        </CardContainer2>
        <CardContainer2>
          <Title>상대 동물상</Title>
          <AnimalBox>
            <AnimalImage src={M_Dog} alt={ANIMAL_TYPES[selfAnimalTypes[0]]} />

            <AnimalBoxText>
              {ANIMAL_TYPES[opponentAnimalTypes[0]]}강아지상
            </AnimalBoxText>
          </AnimalBox>
          <CardGroup>
            {renderAnimalCards(opponentAnimalTypes.slice(1), false)}
          </CardGroup>
        </CardContainer2>
      </CardContainer>

      <ChatButton>오픈채팅 참여</ChatButton>
    </Container>
  );
};
export default AnimalMatchResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;

  @media (min-width: 768px) {
    /* 데스크탑 스타일 */
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; 
  width: 100%;
  margin-bottom: 20px; 
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    gap: 10px; 
  }
`;

const CardContainer2 = styled.div`
  align-items: center;
`;

const Title = styled.h1`
  overflow: hidden;
  color: var(--Font-02_black, #111);
  text-align: center;
  text-overflow: ellipsis;
  font-family: Jalnan;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.5px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-top: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  padding: 20px;
  width: 135px;
  height: 147px;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  `;

const AnimalImage = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 20px;
  margin-left: 30px;
`;

const AnimalName = styled.div`
  font-size: 14px;
  color: #555;
`;

const ChatButton = styled.button`
  width: 343px;
  height: 52px;
  background-color: #ff4b4b;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  position: fixed;
  bottom: 80px;
`;

const AnimalBox = styled.div`
  width: 135px;
  height: 147px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #e5e5e5;
  background: #fff;
`;

const AnimalCircle = styled.div`
  width: 71px;
  height: 71px;
  flex-shrink: 0;
  border-radius: 35.5px;
  border: 1px solid var(--line_02, #e5e5e5);
  margin-top: 20px;
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimalBoxText = styled.h1`
  color: var(--Font-02_black, #111);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.333px;
  margin-top: 10px;
`;

const CardGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
