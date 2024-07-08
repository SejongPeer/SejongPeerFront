import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../theme';
import heart from '../../../assets/image/heart_postdetail.svg';
import axios from 'axios';

const StudyListPostDetail = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [studyData, setStudyData] = useState(null);
  const [isApplied, setIsApplied] = useState(false);
  const { studyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudyData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACK_SERVER}/study/post/${studyId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Refresh-Token': localStorage.getItem('refreshToken'),
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setStudyData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching study data:', error);
      }
    };

    const appliedStatus = localStorage.getItem(`isApplied_${studyId}`);
    if (appliedStatus) {
      setIsApplied(JSON.parse(appliedStatus));
    }

    fetchStudyData();
  }, [studyId]);

  if (!studyData) {
    return <div>Loading...</div>;
  }

  const BackHandler = () => {
    navigate('/study');
  };

  const togglePopup = message => {
    setPopupMessage(message);
    setIsPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const applyForStudy = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACK_SERVER}/study/relations`,
        { studyId: parseInt(studyId) },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Refresh-Token': localStorage.getItem('refreshToken'),
          },
        }
      );

      if (response.status === 201) {
        togglePopup(
          '지원 완료! 모집자가 수락 후, 모집인원이 다 차거나 마감일이 되면 메시지로 오픈채팅 링크가 전달됩니다.'
        );
        setIsApplied(true);
        localStorage.setItem(`isApplied_${studyId}`, true);
      } else {
        console.error('Failed to apply for study:', response);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        togglePopup('이미 신청한 스터디입니다!');
        setIsApplied(true);
        localStorage.setItem(`isApplied_${studyId}`, true);
      } else {
        console.error('Error applying for study:', error);
      }
    }
  };

  return (
    <Container>
      <div>
        <Title>{studyData.data.title}</Title>
        <FlexContainer>
          <Title2>{studyData.data.writerMajor}</Title2>
          <Nickname>{studyData.data.writerNickname}</Nickname>
        </FlexContainer>
        <FlexContainer>
          <ApplicationPeriod>지원기간</ApplicationPeriod>
          <ApplicationPeriod2>
            {studyData.data.recruitmentStart}
          </ApplicationPeriod2>
          ~
          <ApplicationPeriod3>
            {studyData.data.recruitmentEnd}
          </ApplicationPeriod3>
        </FlexContainer>
        <Tag>
          <TagText>{studyData.data.categoryName}</TagText>
        </Tag>
        <Line />
        <Content>{studyData.data.content}</Content>
        <TagContainer></TagContainer>

        <CommentContainer>
          <ScrapButton>
            <ScrapImage src={heart} alt="heart" />
            <ScrapCount>12</ScrapCount>
          </ScrapButton>
          <ApplyButton onClick={applyForStudy} isApplied={isApplied}>
            {isApplied ? '지원완료' : '지원하기(1/4)'}
          </ApplyButton>
        </CommentContainer>
        {isPopupVisible && (
          <Popup>
            <PopupContent>
              <PopupTitle>스터디 지원 완료</PopupTitle>
              <PopupMessage>{popupMessage}</PopupMessage>
              <ConfirmButton onClick={closePopup}>확인</ConfirmButton>
            </PopupContent>
          </Popup>
        )}
      </div>
    </Container>
  );
};

export default StudyListPostDetail;

const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 85%;
  background-color: ${COLORS.back1};
`;

const Title = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.333px;
  text-align: left;
`;

const Title2 = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  color: ${COLORS.font2};
  line-height: 20px;
  letter-spacing: -0.333px;
  text-align: left;
  margin-right: 10px;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const Nickname = styled(Title2)`
  font-weight: 400;
  color: ${COLORS.font2};
`;

const ApplicationPeriod = styled(Title2)`
  color: ${COLORS.font1};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.333px;
  text-align: left;
  margin-right: 10px;
`;

const ApplicationPeriod2 = styled.div`
  color: ${COLORS.font1};
  font-family: Pretendard;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.333px;
  text-align: left;
  margin-right: 1px;
`;

const ApplicationPeriod3 = styled(ApplicationPeriod2)``;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
`;

const Line = styled.div`
  height: 1px;
  width: 100vw;
  background-color: ${COLORS.line1};
  border-bottom: 5px solid ${COLORS.line2};
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: -50vw;
  left: 50%;
  position: relative;
`;

const Content = styled.div`
  margin: auto;
  max-width: 343px;
  width: 100%;
  height: 120px;
  flex-shrink: 0;
  color: ${COLORS.font1};
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.333px;
  text-align: left;
`;

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Tag = styled.button`
  display: flex;
  padding: 4px 8px;
  align-items: flex-start;
  gap: 10px;
  font-weight: 500;
  border-radius: 15px;
  border: 1px solid ${COLORS.sub};
  margin-top: 15px;
  background: none;
  cursor: pointer;
`;

const TagText = styled.div`
  color: ${COLORS.main};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.333px;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ScrapButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 28px;
  border: 1px solid ${COLORS.line2};
  background: #fff;
  margin-top: 15px;
  cursor: pointer;
`;

const ScrapCount = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  color: ${COLORS.font2};
  margin-top: 2px;
`;

const ScrapImage = styled.img`
  width: 20px;
  height: 20px;
`;

const ApplyButton = styled.button`
  width: 287px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 28px;
  background: ${props => (props.isApplied ? COLORS.line2 : COLORS.main)};
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.333px;
  margin-top: 15px;
  cursor: pointer;
  border: none;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 20px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const PopupContent = styled.div`
  display: flex;
  text-align: center;
  font-family: Pretendard;
  color: ${COLORS.font1};
  flex-direction: column;
`;

const PopupTitle = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const PopupMessage = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  color: ${COLORS.font2};
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ConfirmButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${COLORS.main};
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  cursor: pointer;
`;
