

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import search from '../../../assets/image/search_black.png';
import comment_down from '../../../assets/image/comment_down.png';
import scrap from '../../../assets/image/scrap.png';
import heart from '../../../assets/image/heart_postdetail.svg'

import axios from 'axios';

const StudyListPostDetail = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [studyData, setStudyData] = useState(null);
  const {studyId} = useParams();
  const navigate = useNavigate();
  // const studyId = 3;
  console.log("studyId : ",studyId);

  useEffect(() => {
    const fetchStudyData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_BACK_SERVER + `/study/post/${studyId}`,
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

    fetchStudyData();
  }, [studyId]);


  if (!studyData) {
    return <div>Loading...</div>;
  }

  const BackHandler = () => {
    navigate('/study');
  };
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const closePopup = () => {
    setIsPopupVisible(false);
  };
  console.log(studyData)

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
          <ApplicationPeriod2>{studyData.data.recruitmentStart}</ApplicationPeriod2>
          ~
          <ApplicationPeriod3>{studyData.data.recruitmentEnd}</ApplicationPeriod3>
        </FlexContainer>
        <Tag>
            <TagText>{studyData.data.categoryName}</TagText>
          </Tag>
        <Line />
        <Content>
          {studyData.data.content}
        </Content>
        <TagContainer>

        </TagContainer>

        {/* <CommentTitle>댓글 4</CommentTitle>
        <Line />

        <CommentContainer>
          <CommentNickname>세종냥이1</CommentNickname>
          <CommentDate>23.03.28</CommentDate>
        </CommentContainer>
        <CommentContent>
          다른 과 학생인데 스터디 참여 가능할까요..?
        </CommentContent>

        <CommentContainer>
          <CommentDown src={comment_down} alt="comment_down" />
          <CommentNickname>글쓴이</CommentNickname>
          <CommentDate>23.03.28</CommentDate>
        </CommentContainer>

        <CommentContent>열심히 하신다면 참여가능합니다!</CommentContent>

        <Line />

        <CommentContainer>
          <CommentNickname>세종냥이1</CommentNickname>
          <CommentDate>23.03.28</CommentDate>
        </CommentContainer>
        <CommentContent>
          다른 과 학생인데 스터디 참여 가능할까요..?
        </CommentContent>

        <CommentContainer>
          <CommentDown src={comment_down} alt="comment_down" />
          <CommentNickname>글쓴이</CommentNickname>
          <CommentDate>23.03.28</CommentDate>
        </CommentContainer>

        <CommentContent>열심히 하신다면 참여가능합니다!</CommentContent> */}

        <CommentContainer>
          <ScrapButton>
            <ScrapImage src={heart} alt="heart" />
            <ScrapCount>12</ScrapCount>
          </ScrapButton>
          <ApplyButton onClick={togglePopup}>지원하기(1/4)</ApplyButton>
        </CommentContainer>
        {isPopupVisible && (
          <Popup>
            <PopupContent>
              지원 완료! <br />
              닉네임과 학과 정보가 전달됩니다. <br />
              게시자가 지원을 수락하면 오픈채팅방 링크가 메세지로 전달됩니다.
              <br />
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
  background-color: #fafafa;
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
  color: #555;  
  line-height: 20px;
  letter-spacing: -0.333px;
  text-align: left;
  margin-right: 10px;
  margin-top:2px;
  margin-bottom:2px;
`;

const Nickname = styled(Title2)`
  font-weight: 400;
  color: #555;
`;

const ApplicationPeriod = styled(Title2)`
  color: var(--main, #ff4b4b);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.333px;
  text-align: left;
  margin-right: 10px;
`;

const ApplicationPeriod2 = styled.div`
  color: var(--font_01, #111);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.333px;
  text-align: left;
  margin-right: 1px;
`;

const ApplicationPeriod3 = styled(ApplicationPeriod2)`

`;

const FlexContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  width: 100%;
`;

const Line = styled.div`
  height: 1px;
  width: 100vw;
  background-color: #b9b9b9;
  border-bottom: 5px solid var(--line_02, #FFF7F7);
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
  color: var(--font_01, #111);
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
  border: 1px solid var(--sub, #ff7474);
  margin-top: 15px;
  background: none;
  cursor: pointer;
`;

const TagGray = styled(Tag)`
  border: 1px solid var(--sub, #777777);
`;

const TagText = styled.div`
  color: var(--main, #ff4b4b);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.333px;
`;

const TagTextGray = styled(TagText)`
  color: var(--main, #777777);
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CommentNickname = styled.div`
  color: var(--font_02, #555);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.333px;
`;

const CommentDate = styled.div`
  color: var(--font_04, #999);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.333px;
`;

const CommentContent = styled.div`
  color: var(--font_01, #111);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.333px;
`;

const CommentDown = styled.img`
  width: 12px;
  height: 12px;
  flex-shrink: 0;
`;

const ApplyButton = styled.button`
  width: 287px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 28px;
  background: var(--main, #ff4b4b);
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

const ScrapButton = styled.button`
  display: flex;
  flex-direction: column; /* Set flex direction to column */
  align-items: center; /* Center align items */
  justify-content: center; /* Center justify items */
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 28px;
  border: 1px solid var(--line_02, #e5e5e5);
  background: #fff;
  margin-top: 15px;
  cursor: pointer;
`;

const ScrapCount = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  color: #555;
  margin-top: 2px; /* Add some margin to separate from the image */
`;


const ScrapImage = styled.img`
  width: 20px;
  height: 20px;
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
`;

const PopupContent = styled.div`
  text-align: center;
  font-family: Pretendard;
  color: var(--font_01, #111);
`;

const ConfirmButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff4b4b;
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  cursor: pointer;
`;
