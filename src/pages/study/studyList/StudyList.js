import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { MyContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

import StudyListPost from './StudyListPost';
import BottomModal from '../../../components/modal/BottomModal';
import Filter_now from './Filter_now';
import Filter_Feild from './Filter_Feild';
import Filter_Member from './Filter_Member';

import style from './StudyList.module.css';
import select from '../../../assets/image/select.png';

const StudyList = () => {
  const [posts, setPosts] = useState([]);
  const { modalOpen, setModalOpen } = useContext(MyContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const accessToken = localStorage.getItem('accessToken'); // 로컬 스토리지에서 엑세스 토큰 가져오기
      const refreshToken = localStorage.getItem('refreshToken'); // 로컬 스토리지에서 리프레시 토큰 가져오기

      console.log('Access Token:', accessToken); // 엑세스 토큰 확인
      console.log('Refresh Token:', refreshToken); // 리프레시 토큰 확인

      if (!accessToken || !refreshToken) {
        console.error('Tokens not found in local storage.');
        return;
      }

      try {
        const response = await axios.get(
          'https://www.api-sejongpeer.shop/api/v1/study/post',
          {
            params: {
              studyType: 'LECTURE', // 또는 'EXTERNAL_ACTIVITY'
              page: 0,
            },
            headers: {
              Authorization: `Bearer ${accessToken}`, // 헤더에 엑세스 토큰 추가
              'Refresh-token': `${refreshToken}`, // 헤더에 리프레시 토큰 추가
              'Content-Type': 'application/json',
            },
            withCredentials: true, // 쿠키를 포함하는 요청에 필요할 수 있습니다.
          }
        );

        // 응답 데이터 구조에 맞게 posts 설정
        if (
          response.data &&
          response.data.data &&
          Array.isArray(response.data.data.content)
        ) {
          setPosts(response.data.data.content);
        } else {
          console.error(
            'Response data is not in expected format:',
            response.data
          );
          setPosts([]);
        }

        console.log('게시글 조회성공!');
        console.log(response.data);
      } catch (error) {
        if (error.response) {
          console.error(
            'Error:',
            error.response.status,
            error.response.data.message
          );
        } else {
          console.error('Error:', error.message);
        }
      }
    };

    fetchPosts();
  }, []);

  const navigate = useNavigate();

  const goPost = () => {
    navigate('/study/post');
  };

  const goPostDetail = index => {
    navigate(`/study/post/${index}`);
  };

  return (
    <div className={style.container}>
      <div className={style.header}></div>
      <div className={style.filter_box}>
        <div className={style.filter} onClick={modalOpen}>
          <p>스터디</p>
          <img src={select} alt="select" className={style.select} />
        </div>
        <div className={style.filter} onClick={modalOpen}>
          <p>모집인원</p>
          <img src={select} alt="select" className={style.select} />
        </div>
        <div className={style.filter} onClick={modalOpen}>
          <p>모집여부</p>
          <img src={select} alt="select" className={style.select} />
        </div>
      </div>
      <div className={style.list_wrapper}>
        {posts.map(post => (
          <div key={post.id} onClick={() => goPostDetail(post.id)}>
            <StudyListPost post={post} />
          </div>
        ))}
      </div>
      <div className={style.write_btn} onClick={goPost}>
        모집글 작성
      </div>
      {modalOpen && (
        <BottomModal deleteHandler={() => setModalOpen(false)}>
          <Filter_Feild />
          <Filter_Member />
          <Filter_now />
        </BottomModal>
      )}
    </div>
  );
};

export default StudyList;
