import React from 'react';
import styled from 'styled-components';
import heart from '../../../assets/image/heart.png';
import filledHeart from '../../../assets/image/filledHeart.svg'; // 채워진 하트 아이콘
import picture from '../../../assets/image/image.png';
import COLORS from '../../../theme';

const StudyListPost = ({ post }) => {
  const {
    title,
    createdAt,
    hasImage,
    categoryName,
    id,
    tags,
    totalRecruitmentCount,
    participantCount,
  } = post;
  const isScrapped = localStorage.getItem(`isScrapped_${id}`) === 'true'; // 스크랩 상태 확인

  const formatDate = dateString => {
    const date = new Date(dateString);
    const year = date.getFullYear().toString().slice(2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <PostWrapper>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <PostTop>
          <TagWrapper>
            <TagText>{categoryName}</TagText>
          </TagWrapper>
          {tags.map((tag, index) => (
            <TagText1 key={index}>{tag}</TagText1>
          ))}
        </PostTop>
        <DateText>{formatDate(createdAt)}</DateText>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <PostMiddle>
          <Title>{title}</Title>
          {hasImage && <ImageIcon src={picture} alt="hasImage" />}
        </PostMiddle>
        <Count>
          {participantCount} / {totalRecruitmentCount}
        </Count>
      </div>

      <PostBottom>
        <Like>
          <LikeIcon src={isScrapped ? filledHeart : heart} alt="like" />
          <LikeNumber>{post.scrapCount}</LikeNumber>
        </Like>
      </PostBottom>
    </PostWrapper>
  );
};

export default StudyListPost;

const PostWrapper = styled.div`
  width: 100%;
  height: 12vh;
  /* display: flex; */
  flex-direction: column;
  border-bottom: 1px solid ${COLORS.line2};
  padding: 1% 3%;
`;

const PostTop = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1.5%;
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;
  border-radius: 15px;
`;

const TagText = styled.p`
  margin: 0px;
  color: ${COLORS.main};
  display: flex;
  align-items: center;
  gap: 5%;
  border-radius: 15px;
  border: 1px solid ${COLORS.main};
  padding: 2px 8px;
`;

const TagText1 = styled.p`
  margin: 0px;
  color: ${COLORS.font3};
  display: flex;
  align-items: center;
  gap: 5%;
  border-radius: 15px;
  border: 1px solid ${COLORS.line1};
  padding: 2px 8px;
`;

const DateText = styled.div`
  font-size: 1rem;
  color: ${COLORS.font4};
  margin-top: 1.5%;
`;

const PostMiddle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 1.2%;
  margin-top: 6px;
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.main};
  font-weight: 600;
  font-size: 16px;
  margin: 0px;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${COLORS.font1};
  margin: 2.1% 0;
`;

const ImageIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const PostBottom = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  gap: 5%;
  padding: 0 1.2%;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 8%;
`;

const LikeIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const LikeNumber = styled.p`
  color: ${COLORS.font3};
`;
