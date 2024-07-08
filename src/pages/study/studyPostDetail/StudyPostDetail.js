import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useStore from './useStore';
import COLORS from '../../../theme';
import heart from '../../../assets/image/heart_postdetail.svg';
import filledHeart from '../../../assets/image/filledHeart.svg';

// api 호출 함수 컴포넌트로 따로 분리함
import { fetchStudyData, applyForStudy, toggleScrap } from './api';

const StudyListPostDetail = () => {
  // 상태관리 -> zustand 사용
  const {
    isPopupVisible,
    popupMessage,
    studyData,
    isApplied,
    isScrapped,
    setPopupVisible,
    setPopupMessage,
    setStudyData,
    setApplied,
    setScrapped,
  } = useStore();

  const { studyId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStudyData(studyId);
        setStudyData(data);
        setScrapped(data.data.isScrapped);
        const appliedStatus = localStorage.getItem(`isApplied_${studyId}`);
        if (appliedStatus) {
          setApplied(JSON.parse(appliedStatus));
        }
      } catch (error) {
        console.error('Error fetching study data:', error);
      }
    };

    fetchData();
  }, [studyId, setStudyData, setScrapped, setApplied]);

  if (!studyData) {
    return <div>Loading...</div>;
  }

  const togglePopup = message => {
    setPopupMessage(message);
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const applyForStudyHandler = async () => {
    try {
      const response = await applyForStudy(studyId);
      if (response.status === 201) {
        togglePopup(
          '지원 완료! 모집자가 수락 후, 모집인원이 다 차거나 마감일이 되면 메시지로 오픈채팅 링크가 전달됩니다.'
        );
        setApplied(true);
        localStorage.setItem(`isApplied_${studyId}`, true);
        console.log(response);
      } else {
        console.error('Failed to apply for study:', response);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        togglePopup('이미 신청한 스터디입니다!');
        setApplied(true);
        localStorage.setItem(`isApplied_${studyId}`, true);
      } else {
        console.error('Error applying for study:', error);
      }
    }
  };

  const toggleScrapHandler = async () => {
    try {
      const response = await toggleScrap(studyId, isScrapped);
      if (response.status === 200) {
        setScrapped(!isScrapped);
      } else {
        console.error('스크랩 실패:', response);
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        console.error('권한이 없음.');
      } else {
        console.error('스크랩 실패:', error);
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
          <ScrapButton onClick={toggleScrapHandler}>
            <ScrapImage src={isScrapped ? filledHeart : heart} alt="heart" />
            <ScrapCount>12</ScrapCount>
          </ScrapButton>
          <ApplyButton onClick={applyForStudyHandler} isApplied={isApplied}>
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
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.333px;
  text-align: left;
`;

const Title2 = styled.div`
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
  border-bottom: 5px solid #fff7f7;
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
  color: ${COLORS.font1};
  flex-direction: column;
`;

const PopupTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const PopupMessage = styled.div`
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
  font-size: 16px;
  cursor: pointer;
`;
