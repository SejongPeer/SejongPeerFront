import React from 'react';
import style from '../StudyRequirement.module.css';

const DateFrequency = ({ 
    seletedFrequency, 
    handleFrequencyClick 
}) => {
    const handleChange = (event) => {
        handleFrequencyClick(event.target.value);
    };

    return (
        <div className={style.flexWrapper}>
            <label className={style.label}>모임 빈도</label>
            <div className={style.options}>
                <label className={`${style.option} ${seletedFrequency === '주 1~2회' ? style.optionChecked : ''}`}>
                    <input
                        type="radio"
                        value="주 1~2회"
                        checked={seletedFrequency === '주 1~2회'}
                        onChange={handleChange}
                        className={style.radioInput}
                    />
                    <div className={style.customCheckbox}></div>
                    <p>주 1~2회</p>
                </label>
                <label className={`${style.option} ${seletedFrequency === '주 3~4회' ? style.optionChecked : ''}`}>
                    <input
                        type="radio"
                        value="주 3~4회"
                        checked={seletedFrequency === '주 3~4회'}
                        onChange={handleChange}
                        className={style.radioInput}
                    />
                    <div className={style.customCheckbox}></div>
                    <p>주 3~4회</p>
                </label>
                <label className={`${style.option} ${seletedFrequency === '주 5회 이상' ? style.optionChecked : ''}`}>
                    <input
                        type="radio"
                        value="주 5회 이상"
                        checked={seletedFrequency === '주 5회 이상'}
                        onChange={handleChange}
                        className={style.radioInput}
                    />
                    <div className={style.customCheckbox}></div>
                    <p>주 5회 이상</p>
                </label>
            </div>
        </div>
    );
};

export default DateFrequency;
