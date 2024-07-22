import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from './StudyMember.module.css';
import { useState, useContext } from 'react';
import { MyContext } from '../../../../App';

import usePostStore from '../usePostStore';
const StudyMember = prop => {
  const { modalOpen, setModalOpen } = useContext(MyContext);
  const trackStyle = {
    backgroundColor: '#FF4B4B',
  };
  const handleStyle = {
    backgroundColor: '#FF4B4B',
    border: 'solid 2px #FF4B4B',
    cursor: 'pointer',
    width: '16px',
    height: '16px',
    opacity: '1',
    boxShodow: '0 0 0 3px #FFF',
  };
  const sliderwidth = {
    width: '93%',
  };

  const [sliderValue, setSliderValue] = useState(); // 슬라이더의 초기 값
  const { memberNum, setMemberNum } = usePostStore();
  const handleSliderChange = value => {
    setMemberNum(value); // 슬라이더 값을 업데이트
    console.log(value);
  };
  const cancelHandler = () => {
    setModalOpen(false);
  };
  return (
    <div className={style.container}>
      <header className={style.header}>
        <span>모집인원</span>
      </header>
      <div className={style.filter_wrapper}>
        <Slider
          // range
          min={1}
          max={7}
          step={1}
          defaultValue={memberNum}
          allowCross={false}
          trackStyle={trackStyle}
          handleStyle={handleStyle}
          style={sliderwidth}
          onChange={handleSliderChange}
        />
        <div className={style.member_value}>
          <span className={style.member_num}>1명</span>
          <span className={style.member_num}>3명</span>
          <span className={style.member_num}>5명</span>
          <span className={style.member_num}>7명</span>
        </div>
      </div>
      <div className={style.text}>*본인제외입니다.</div>
      <div className={style.finish} onClick={cancelHandler}>
        <span>확인</span>
      </div>
    </div>
  );
};

export default StudyMember;
