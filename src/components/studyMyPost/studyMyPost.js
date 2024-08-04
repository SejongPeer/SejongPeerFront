import React from 'react';
import styled from 'styled-components';
import COLORS from '../../theme';

import { useEffect, useState } from 'react';
import { fetchMyPost } from './api';
import style from './studyMyPost.module.css';

const StudyMyPost = () => {
  const [myPosts, setMyPosts] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchMyPost();
        console.log(fetchedPosts);
        setMyPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    loadPosts();
  }, []);
  return (
    <Container>
      {myPosts.map((post, index) => (
        <OuterBox key={index}>
          <HeaderStyle>
            <Title className={style.title}>{post.studyTitle}</Title>
            <HeaderBottom>
              <ApplicantNum>지원인원 : {post.applicants.length}명</ApplicantNum>
              <EndBtn>모집마감하기</EndBtn>
            </HeaderBottom>
          </HeaderStyle>

          {post.applicants.length > 0 && (
            <BottomStyle className={style.applicantsList}>
              {post.applicants.map((applicant, appIndex) => (
                <ApplicantBox key={appIndex}>
                  <ApplicantInfo>
                    {applicant.major} {applicant.grade}학년
                  </ApplicantInfo>
                  <BtnBox>
                    <AcceptBtn>수락</AcceptBtn>
                    <RefuseBtn>거절</RefuseBtn>
                  </BtnBox>
                </ApplicantBox>
              ))}
            </BottomStyle>
          )}
        </OuterBox>
      ))}
    </Container>
  );
};
export default StudyMyPost;

const Container = styled.div`
  overflow: auto;
  width: 100%;
  height: 84%;
  background-color: #fbe4e4;
  display: flex;
  flex-direction: column;
  gap: 0.8%;
`;

const OuterBox = styled.div`
  background-color: ${COLORS.back2};
`;
const HeaderStyle = styled.div`
  height: 10vh;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 15%;
  border-bottom: 1px solid ${COLORS.line2};
`;
const Title = styled.p`
  width: 100%;
  height: 20px;
  margin: 0 0 3px 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: 700;
`;
const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ApplicantNum = styled.span`
  color: ${COLORS.main};
  font-size: 0.9rem;
  font-weight: 600;
`;
const EndBtn = styled.button`
  background-color: ${COLORS.back2};
  color: ${COLORS.font4};
  font-size: 0.9rem;
  font-weight: 500;
`;

const BottomStyle = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ApplicantBox = styled.div`
  height: 35px;
  display: flex;
  justify-content: space-between;
`;
const ApplicantInfo = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  gap: 2%;
`;
const AcceptBtn = styled.button`
  display: block;
  width: 55px;
  height: 35px;
  background-color: ${COLORS.main};
  border-radius: 32px;
  color: ${COLORS.back2};
  font-size: 1rem;
`;

const RefuseBtn = styled.button`
  display: block;
  width: 55px;
  height: 35px;
  background-color: ${COLORS.back2};
  border-radius: 32px;
  border: 1px solid ${COLORS.line2};
  font-size: 1rem;
`;
