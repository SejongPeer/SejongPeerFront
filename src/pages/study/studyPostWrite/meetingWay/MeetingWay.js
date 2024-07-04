// src/components/MeetingWay.js
import React from 'react';
import style from './MeetingWay.module.css';

const MeetingWay = ({ selectedOption, onOptionChange }) => {
  return (
    <div className={style.MeetingWayBox}>
      <div className={style.MeetingWayWrapper}>
        <div className={style.MeetingWay}>방식</div>
        <div className={style.options}>
          <label className={style.option}>
            <input
              type="radio"
              value="대면"
              checked={selectedOption === '대면'}
              onChange={onOptionChange}
              className={style.radioInput}
            />
            대면
          </label>
          <label className={style.option}>
            <input
              type="radio"
              value="비대면"
              checked={selectedOption === '비대면'}
              onChange={onOptionChange}
              className={style.radioInput}
            />
            비대면
          </label>
          <label className={style.option}>
            <input
              type="radio"
              value="대면 & 비대면"
              checked={selectedOption === '대면 & 비대면'}
              onChange={onOptionChange}
              className={style.radioInput}
            />
            대면 & 비대면
          </label>
        </div>
      </div>
    </div>
  );
};

export default MeetingWay;
