import React from 'react';
import style from '../StudyRequirement.module.css';

const MeetingWay = ({ 
  selectedWay, 
  handleWayClick 
}) => {
    const handleChange = (event) => {
      handleWayClick(event.target.value);
    };

    return (
        <div className={style.flexWrapper}>
            <label className={style.label}>방식</label>
            <div className={style.options}>
                <label className={`${style.option} ${selectedWay === '대면' ? style.optionChecked : ''}`}>
                    <input
                        type="checkbox"
                        value="대면"
                        checked={selectedWay === '대면'}
                        onChange={handleChange}
                        className={style.radioInput}
                    />
                    <div className={style.customCheckbox}></div>
                    <p>대면</p>
                </label>
                <label className={`${style.option} ${selectedWay === '비대면' ? style.optionChecked : ''}`}>
                    <input
                        type="checkbox"
                        value="비대면"
                        checked={selectedWay === '비대면'}
                        onChange={handleChange}
                        className={style.radioInput}
                    />
                    <div className={style.customCheckbox}></div>
                    <p>비대면</p>
                </label>
                <label className={`${style.option} ${selectedWay === '대면&비대면' ? style.optionChecked : ''}`}>
                    <input
                        type="checkbox"
                        value="대면&비대면"
                        checked={selectedWay === '대면&비대면'}
                        onChange={handleChange}
                        className={style.radioInput}
                    />
                    <div className={style.customCheckbox}></div>
                    <p>대면&비대면</p>
                </label>
            </div>
        </div>
    );
};

export default MeetingWay;
