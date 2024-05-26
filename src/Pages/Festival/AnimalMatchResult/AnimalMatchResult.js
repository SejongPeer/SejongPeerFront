import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useContext } from 'react-router-dom';

import M_Bear from '../../../Assets/Animals/M_Bear.png';
import M_Cat from '../../../Assets/Animals/M_Cat.png';
import M_Dino from '../../../Assets/Animals/M_Dino.png';
import M_DOG from '../../../Assets/Animals/M_DOG.png';
import M_Rabbit from '../../../Assets/Animals/M_Rabbit.png';
import M_Wolf from '../../../Assets/Animals/M_Wolf.png';
import W_Cat from '../../../Assets/Animals/W_Cat.png';
import W_Dear from '../../../Assets/Animals/W_Dear.png';
import W_DesertFox from '../../../Assets/Animals/W_DesertFox.png';
import W_DOG from '../../../Assets/Animals/W_DOG.png';
import W_Rabbit from '../../../Assets/Animals/W_Rabbit.png';

const ANIMAL_IMAGES = {
  M_Bear,
  M_Cat,
  M_Dino,
  M_DOG,
  M_Rabbit,
  M_Wolf,
  W_Cat,
  W_Dear,
  W_DesertFox,
  W_DOG,
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

  // const setTemporaryData = gender => {
  //   if (gender === 'MALE') {
  //     setSelfAnimalTypes(['DOG', 'DOG', 'DOG']);
  //     setOpponentAnimalTypes(['DOG', 'DOG', 'DOG']);
  //   } else if (gender === 'FEMALE') {
  //     setSelfAnimalTypes(['DOG', 'DOG', 'DOG']);
  //     setOpponentAnimalTypes(['DOG', 'DOG', 'DOG']);
  //   }
  //   setMeetingGroupType('THREE_ON_THREE');
  //   setKakaoLink(null);

  //   console.log('Temporary selfAnimalTypes:', ['DOG', 'DOG', 'DOG']);
  //   console.log('Temporary opponentAnimalTypes:', ['DOG', 'DOG', 'DOG']);
  //   console.log('ANIMAL_TYPES[selfAnimalTypes[0]]:', ANIMAL_TYPES['DOG']);
  // };

  useEffect(() => {
    const gender = localStorage.getItem('gender');
    setGender(gender);
    //setTemporaryData(gender);


    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // 테스트할 유저의 고유 ID
        const response = await fetch(
          `${process.env.REACT_APP_FEST_SERVER}/meeting/matching-result?userId=${userId}`
        );
        const data = await response.json();
        console.log(data);
        console.log(data.data.femaleUsers);
        console.log(data.data.maleUsers);

        console.log(data.data);


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

    console.log("변환된 동물 변수 : "+`${prefix}_${animalType}`);

    return `${prefix}_${animalType}`;
  };

  const renderAnimalCards = (animalTypes, isSelf) => {
    return animalTypes.map((animalType, index) => {
      const animalImageKey = getAnimalImageKey(animalType, isSelf);
      const animalImage = getAnimalImageKey(animalType, isSelf);
      console.log("animalImageKey : "+ animalImageKey);
      console.log("animalImage : "+ animalImage);
      return (     
        <Container key={index}>
          <CardContainer2>
            <Card>
            <AnimalImage src={M_DOG} alt={ANIMAL_TYPES[selfAnimalTypes[0]]} />

            {/* <AnimalImage src={animalImageKey} alt={animalImage} /> */}
            <AnimalName>{ANIMAL_TYPES[animalType]}상</AnimalName>
            </Card>
        </CardContainer2>
       </Container>
      );
    });
  };

  return (
    <Container>
      <CardContainer>
        <CardContainer2>
          <Title>본인 동물상</Title>
          {/* <AnimalBox>
            <AnimalImage src={M_Dog} alt={ANIMAL_TYPES[selfAnimalTypes[0]]} />
            <AnimalBoxText>
              {ANIMAL_TYPES[selfAnimalTypes[0]]}상
            </AnimalBoxText>
          </AnimalBox> */}
          <CardGroup>
            {renderAnimalCards(selfAnimalTypes.slice(1), true)}
          </CardGroup>
        </CardContainer2>
        <CardContainer2>
          <Title>상대 동물상</Title>
          {/* <AnimalBox>
            <AnimalImage src={M_Dog} alt={ANIMAL_TYPES[selfAnimalTypes[0]]} />

            <AnimalBoxText>
              {ANIMAL_TYPES[opponentAnimalTypes[0]]}상
            </AnimalBoxText>
          </AnimalBox> */}
          <CardGroup>
            {renderAnimalCards(opponentAnimalTypes.slice(1), true)}
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
  flex-direction: column;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    flex-direction: row;
    gap: 10px; 
  }
`;

const CardContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:5px;
`;
const CardGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-direction:column;
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
  margin-top: 1px;
  margin-left: 1px;
`;

const AnimalName = styled.div`
  font-size: 17px;
  color: black;
  font-weight:800;
  margin-top:10px;
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


