import style from './StudyPostDetail.module.css';
import serch from '../../../Assets/serch.png';
import { useState, useContext } from 'react';
import { MyContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
import comment_down from '../../../Assets/comment_down.png';
import scrap from '../../../Assets/scrap.png';

const StudyListPostDetail = () => {
  const navigate = useNavigate();
  const BackHandler = () => {
    navigate('/study');
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.title}>주말마다 카공 같이 하실 분?</div>
        <div className={style.title2}>컴퓨터공학과 세종냥이</div>
        <div className={style.flexContainer}>
          <div className={style.Application_period}>지원기간</div>
          <div className={style.Application_period2}>
            {'  '}
            2024.01.20-2024.01.30
          </div>
        </div>
        <div className={style.line}></div>
        <div className={style.content}>
          주말마다 디자인인모션 같이 공부하실 분 모집합니다~! A+ 노리고 공부하실
          분들만 지원해주세요!! 주말마다 디자인인모션 같이 공부하실 분
          모집합니다~! A+ 노리고 공부하실 분들만 지원해주세요!! 주말마다
          디자인인모션 같이 공부하실 분 모집합니다~! A+ 노리고 공부하실 분들만
          지원해주세요!!{' '}
        </div>
        <button className={style.tag}>
          <div className={style.tag2}>학교수업</div>
        </button>
        <div className={style.line}></div>

        <div className={style.comment_title}>댓글 4</div>
        <div className={style.line}></div>

        <div className={style.comment_container}>
          <div className={style.comment_nickname}>세종냥이1</div>
          <div className={style.comment_date}>23.03.28</div>
        </div>
        <div className={style.comment_content}>
          다른 과 학생인데 스터디 참여 가능할까요..?
        </div>

        <div className={style.comment_container}>
          <img
            src={comment_down}
            alt='comment_down'
            className={style.comment_down}
          ></img>
          <div className={style.comment_nickname}>글쓴이</div>
          <div className={style.comment_date}>23.03.28</div>
        </div>

        <div className={style.comment_content}>
          열심히 하신다면 참여가능합니다!{' '}
        </div>

        <div className={style.line}></div>

        <div className={style.comment_container}>
          <div className={style.comment_nickname}>세종냥이1</div>
          <div className={style.comment_date}>23.03.28</div>
        </div>
        <div className={style.comment_content}>
          다른 과 학생인데 스터디 참여 가능할까요..?
        </div>

        <div className={style.comment_container}>
          <img
            src={comment_down}
            alt='comment_down'
            className={style.comment_down}
          ></img>
          <div className={style.comment_nickname}>글쓴이</div>
          <div className={style.comment_date}>23.03.28</div>
        </div>

        <div className={style.comment_content}>
          열심히 하신다면 참여가능합니다!{' '}
        </div>
        <div className={style.comment_container}>
          <button className={style.scrap_button}>
            <img src={scrap} alt='scrap' className={style.scrap}></img>
          </button>
          <button className={style.apply}>지원하기</button>
        </div>
      </div>
    </div>
  );
};

export default StudyListPostDetail;
