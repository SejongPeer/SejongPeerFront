import React from 'react';
import styled from 'styled-components';
import StudyMyPost from '../../../components/studyMyPost/studyMyPost';
import COLORS from '../../../theme';

const MyPost = () => {
  return (
    <Container>
      <InnerContainer>
        <Notice>
          *모집마감 버튼을 누르면 인원 수와 상관없이 모집이 마감됩니다.
        </Notice>
        <StudyMyPost />
      </InnerContainer>
    </Container>
  );
};

export default MyPost;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.back2};
`;

const InnerContainer = styled.div`
  width: 100vw;

  background-color: #fbe4e4;
  @media (min-width: 768px) {
    width: 674px;
    margin-top: 1vh;
  }
`;

const Notice = styled.div`
  background-color: white;
  width: 100%;
  height: 8%;
  margin-top: 7vh;
  font-size: 0.9rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;
