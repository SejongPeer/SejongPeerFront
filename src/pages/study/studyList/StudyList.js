// src/components/study/StudyList.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../../theme';
import StudyListPost from './StudyListPost';
import BottomModal from '../../../components/modal/BottomModal';
import Filter_now from './Filter_now';
import Filter_Feild from './Filter_Feild';
import Filter_Member from './Filter_Member';
import select from '../../../assets/image/select.png';
import useStudyStore from './useStudyStore';
import { fetchPosts } from './api';

const StudyList = () => {
  const { posts, modalOpen, setPosts, setModalOpen } = useStudyStore();
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    loadPosts();
  }, [setPosts]);

  const goPost = () => {
    navigate('/study/post');
  };

  const goPostDetail = index => {
    navigate(`/study/post/${index}`);
  };

  return (
    <Container>
      <Header></Header>
      <FilterBox>
        <Filter onClick={() => setModalOpen(true)}>
          <p>스터디</p>
          <SelectImage src={select} alt="select" />
        </Filter>
        <Filter onClick={() => setModalOpen(true)}>
          <p>모집인원</p>
          <SelectImage src={select} alt="select" />
        </Filter>
        <Filter onClick={() => setModalOpen(true)}>
          <p>모집여부</p>
          <SelectImage src={select} alt="select" />
        </Filter>
      </FilterBox>
      <ListWrapper>
        {posts.map(post => (
          <div key={post.id} onClick={() => goPostDetail(post.id)}>
            <StudyListPost post={post} />
          </div>
        ))}
      </ListWrapper>
      <WriteButton onClick={goPost}>모집글 작성</WriteButton>
      {modalOpen && (
        <BottomModal deleteHandler={() => setModalOpen(false)}>
          <Filter_Feild />
          <Filter_Member />
          <Filter_now />
        </BottomModal>
      )}
    </Container>
  );
};

export default StudyList;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  height: 7%;
`;

const FilterBox = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  padding: 0 2.5%;
  background-color: ${COLORS.back1};
  position: fixed;
  margin: 0vh 0 0.5vh 0;
  border-bottom: 5px solid ${COLORS.line2};
`;

const Filter = styled.div`
  width: auto;
  min-width: 20%;
  max-width: 100px;
  padding: 1% 2%;
  height: 70%;
  border: 1px solid ${COLORS.line1};
  border-radius: 25px;
  margin: 0 1%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  white-space: nowrap;
  overflow: hidden;
  flex-basis: auto;
  p {
    font-size: 1rem;
    white-space: nowrap;
    color: ${COLORS.font3};
  }
`;

const SelectImage = styled.img`
  width: 10px;
  height: 6px;
  margin-left: 4%;
`;

const ListWrapper = styled.div`
  width: 100vw;
  height: auto;
  margin: 5vh 0;
`;

const WriteButton = styled.div`
  width: 40%;
  max-width: 200px;
  height: 6%;
  max-height: 60px;
  background-color: ${COLORS.main};
  border-radius: 35px;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 5vh;
  z-index: 2;
`;
