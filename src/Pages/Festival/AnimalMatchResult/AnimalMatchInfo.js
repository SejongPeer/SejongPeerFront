import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AnimalMatchInfo = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();

  const handleMeetingStart = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_FEST_SERVER}/user/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phoneNumber }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log(data.data.id);
      localStorage.setItem('userId', data.data.id);
      alert('매칭 결과페이지로 이동합니다!');
      navigate('/fest/AnimalMatchResult');
    } else {
      console.error('Error:', response.statusText);
    }
  };

  return (
    <EntireContainer>
      <Container>
        <Title>미팅 정보 입력</Title>
        <Box>
          <Input
            placeholder="이름입력"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </Box>
        <Box>
          <Input
            placeholder="전화번호입력"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </Box>
        <MeetingStart onClick={handleMeetingStart}>미팅시작</MeetingStart>
      </Container>
    </EntireContainer>
  );
};

export default AnimalMatchInfo;

const EntireContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
`;

const Title = styled.h2`
  overflow: hidden;
  color: var(--Font-02_black, #111);
  text-align: center;
  text-overflow: ellipsis;
  font-family: 'jalnan';
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
  letter-spacing: -0.5px;
  margin: 20px 0 40px 0;
`;

const MeetingStart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 311px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 26px;
  background: #ff4b4b;
  color: white;
  color: var(--Font-01_White, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
  letter-spacing: -0.45px;
  margin-top: 20px;
  cursor: pointer;
`;

const Box = styled.div`
  display: flex;
  width: 311px;
  padding: 14px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid #c5c5c5;
  background: var(--BG-White_Color, #fff);
  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
`;
