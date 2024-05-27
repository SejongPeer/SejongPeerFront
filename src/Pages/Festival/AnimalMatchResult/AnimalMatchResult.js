import { useState, useEffect } from 'react';
import styled from 'styled-components';

import M_BEAR from '../../../Assets/Animals/M_BEAR.png';
import M_CAT from '../../../Assets/Animals/M_CAT.png';
import M_DINOSAUR from '../../../Assets/Animals/M_DINOSAUR.png';
import M_DOG from '../../../Assets/Animals/M_DOG.png';
import M_RABBIT from '../../../Assets/Animals/M_RABBIT.png';
import M_WOLF from '../../../Assets/Animals/M_WOLF.png';

import W_CAT from '../../../Assets/Animals/W_CAT.png';
import W_DEER from '../../../Assets/Animals/W_DEER.png';
import W_DESERT_FOX from '../../../Assets/Animals/W_DESERT_FOX.png';
import W_DOG from '../../../Assets/Animals/W_DOG.png';
import W_RABBIT from '../../../Assets/Animals/W_RABBIT.png';
import W_HAMSTER from '../../../Assets/Animals/W_HAMSTER.png';

const ANIMAL_IMAGES = {
  M_BEAR,
  M_CAT,
  M_DINOSAUR,
  M_DOG,
  M_RABBIT,
  M_WOLF,
  W_CAT,
  W_DEER,
  W_DESERT_FOX,
  W_DOG,
  W_RABBIT,
  W_HAMSTER,
};

const ANIMAL_TYPES = {
  BEAR: '곰',
  CAT: '고양이',
  DINOSAUR: '공룡',
  DOG: '강아지',
  RABBIT: '토끼',
  HAMSTER: '햄스터',
  WOLF: '늑대',
  DEER: '사슴',
  DESERT_FOX: '사막여우',
};

const AnimalMatchResult = () => {
  const [selfAnimalTypes, setSelfAnimalTypes] = useState([]);
  const [opponentAnimalTypes, setOpponentAnimalTypes] = useState([]);
  const [meetingGroupType, setMeetingGroupType] = useState('');
  const [kakaoLink, setKakaoLink] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const gender = localStorage.getItem('gender');
    setGender(gender);

    const fetchData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // 테스트할 유저의 고유 ID
        const response = await fetch(
          `${process.env.REACT_APP_FEST_SERVER}/meeting/matching-result?userId=${userId}`
        );
        const data = await response.json();
        console.log(data);
        console.log("옾챗 링크 : "+ data.data.kakaoLink)

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
        console.error('Error fetching match result!!:', error);
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
    //console.log('성별 붙인 값 : ' + `${prefix}_${animalType}`);

    return `${prefix}_${animalType}`;
  };

  const handleChatButtonClick = () => {
    window.location.href = kakaoLink;
  };
  

  const renderAnimalCards = (animalTypes, isSelf) => {
    return animalTypes.map((animalType, index) => {
      const animalImageKey = getAnimalImageKey(animalType, isSelf);
      const animalImage = ANIMAL_IMAGES[animalImageKey];
      //console.log('animalImageKey : ' + ANIMAL_TYPES[animalType]);
      //console.log('animalImage : ' + animalImage);
      return (
        <Container key={index}>
          <CardContainer2>
            <Card>
              <AnimalImage src={animalImage} alt={ANIMAL_TYPES[animalType]} />
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
          <CardGroup>{renderAnimalCards(selfAnimalTypes, true)}</CardGroup>
        </CardContainer2>
        <CardContainer2>
          <Title>상대 동물상</Title>
          <CardGroup>{renderAnimalCards(opponentAnimalTypes, false)}</CardGroup>
        </CardContainer2>
      </CardContainer>

      <ChatButton onClick={handleChatButtonClick}>오픈채팅 참여</ChatButton>
    </Container>
  );
};

export default AnimalMatchResult;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

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
    gap: 25px;
    margin-top: 15vh;
  }
`;

const CardContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CardGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid #e5e5e5;
  background: #fff;
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
  margin-top: 5px;
  margin-bottom: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 135px;
  height: 147px;
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
  font-weight: 800;
  margin-top: 10px;
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
  bottom: 140px;
  margin-bottom: -65px;
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