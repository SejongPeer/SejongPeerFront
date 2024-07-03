import { useContext, useState } from 'react';
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
  const [posts, setPosts] = useState([
    {
      index: 1,
      title: '같이 A+ 맞을 사람 구함',
      member: '1/4',
      like: 16,
      islike: true,
      image: true,
      comment: 3,
      date: '24.02.04',
      tags: [
        { name: 'JAVA 프로그래밍', type: 'tag_class' },
        { name: '우미애', type: 'tag' },
      ],
      state: 'ongoing',
    },
    {
      index: 2,
      title: '프로젝트 팀원 모집',
      member: '2/5',
      like: 20,
      comment: 5,
      date: '24.02.06',
      tags: [
        { name: '알고리즘', type: 'tag_class' },
        { name: '김교수', type: 'tag' },
      ],
      state: 'ongoing',
    },
    {
      index: 3,
      title: '캡스톤 같은조 할사람 구함',
      member: '모집완료',
      like: 16,
      comment: 3,
      date: '24.02.04',
      tags: [
        { name: '캡스톤 디자인A', type: 'tag_class' },
        { name: '송형규', type: 'tag' },
      ],
      state: 'finish',
      date: '24.02.04',
      tags: [
        { name: 'JAVA 프로그래밍', type: 'tag_class' },
        { name: '우미애', type: 'tag' },
      ],
      state: 'ongoing',
    },
    {
      index: 4,
      title: '프로젝트 팀원 모집',
      member: '2/5',
      like: 20,
      comment: 5,
      date: '24.02.06',
      tags: [
        { name: '알고리즘', type: 'tag_class' },
        { name: '김교수', type: 'tag' },
      ],
      state: 'ongoing',
    },
    {
      index: 5,
      title: '캡스톤 같은조 할사람 구함',
      member: '모집완료',
      like: 16,
      comment: 3,
      date: '24.02.04',
      tags: [
        { name: '캡스톤 디자인A', type: 'tag_class' },
        { name: '송형규', type: 'tag' },
      ],
      state: 'finish',
    },
  ]);

  //모달 오픈
  const { modalOpen, setModalOpen } = useContext(MyContext);
  const [isClickedStudy, setIsClickedStudy] = useState(false);
  const [isClickedMember, setIsClickedMember] = useState(false);
  const [isClickedOn, setIsClickedOn] = useState(false);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };
  const studyFilterModalHandler = () => {
    setModalOpen(!modalOpen);
    setIsClickedStudy(true);
  };

  // 모집인원 모달 창 렌더링 여부
  const memberFilterModalHandler = () => {
    setModalOpen(!modalOpen);
    setIsClickedMember(true);
  };

  // 모집여부 모달 창 렌더링 여부
  const onFilterModalHandler = () => {
    setModalOpen(!modalOpen);
    setIsClickedOn(true);
  };

  // 모달 닫을 때 내용 제거
  const deleteHandler = () => {
    setIsClickedStudy(false);
    setIsClickedMember(false);
    setIsClickedOn(false);
  };

  //필터링 값
  const [onFilter, setOnFilter] = useState(['ongoing', 'finish']);
  // all - 모두, ongoing - 모집 중, finish - 모집완료

  const onFilterHandler = onFilter => {};

  // 필터링

  const filterHandler = posts.filter(post => onFilter.includes(post.state));

  const navigate = useNavigate();
  const goPost = () => {
    navigate('/study/post');
  };

  return (
    <div className={style.container}>
      <div className={style.header}></div>
      <div className={style.filter_box}>
        <div className={style.filter} onClick={studyFilterModalHandler}>
          <p>스터디</p>
          <img src={select} alt="select" className={style.select} />
        </div>
        <div className={style.filter} onClick={memberFilterModalHandler}>
          <p>모집인원</p>
          <img src={select} alt="select" className={style.select} />
        </div>
        <div className={style.filter} onClick={onFilterModalHandler}>
          <p>모집여부</p>
          <img src={select} alt="select" className={style.select} />
        </div>
      </div>
      <div className={style.list_wrapper}>
        {filterHandler.map(post => (
          <StudyListPost post={post} key={post.index} />
        ))}
      </div>
      <div className={style.write_btn} onClick={goPost}>
        모집글 작성
      </div>
      {modalOpen && (
        <BottomModal deleteHandler={deleteHandler}>
          {isClickedStudy && <Filter_Feild />}
          {isClickedMember && <Filter_Member />}
          {isClickedOn && (
            <Filter_now
              onFilterHandler={onFilterHandler}
              deleteHandler={deleteHandler}
              onFilter={onFilter}
            />
          )}
        </BottomModal>
      )}
    </div>
  );
};

export default StudyList;
