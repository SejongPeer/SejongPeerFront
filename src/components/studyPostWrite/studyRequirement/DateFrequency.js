import React from 'react';
import style from '../StudyRequirement.module.css';
import usePostStore from '../../../pages/study/studyPostWrite/usePostStore';
const DateFrequency = () => {
  const { selectedFrequency, setSelectedFrequency } = usePostStore();
  const handleChange = event => {
    setSelectedFrequency(event.target.value);
  };

  return (
    <div className={style.flexWrapper}>
      <label className={style.label}>모임 빈도</label>
      <div className={style.options}>
        <label className={style.option}>
          <input
            type="radio"
            value="ONCE_OR_TWICE_A_WEEK"
            checked={selectedFrequency === 'ONCE_OR_TWICE_A_WEEK'}
            onChange={handleChange}
            className={style.radioInput}
          />
          <div className={style.customCheckbox}>
          {selectedFrequency === 'ONCE_OR_TWICE_A_WEEK' ? <div className={style.checked}></div> : <></>}
          </div>
          <p>주 1~2회</p>
        </label>
        <label className={style.option}>
          <input
            type="radio"
            value="THREE_TO_FOUR_TIMES_A_WEEK"
            checked={selectedFrequency === 'THREE_TO_FOUR_TIMES_A_WEEK'}
            onChange={handleChange}
            className={style.radioInput}
          />
          <div className={style.customCheckbox}>
          {selectedFrequency === 'THREE_TO_FOUR_TIMES_A_WEEK' ? <div className={style.checked}></div> : <></>}
          </div>
          <p>주 3~4회</p>
        </label>
        <label className={style.option}>
          <input
            type="radio"
            value="FIVE_OR_MORE_TIMES_A_WEEK"
            checked={selectedFrequency === 'FIVE_OR_MORE_TIMES_A_WEEK'}
            onChange={handleChange}
            className={style.radioInput}
          />
          <div className={style.customCheckbox}>
          {selectedFrequency === 'FIVE_OR_MORE_TIMES_A_WEEK' ? <div className={style.checked}></div> : <></>}
          </div>
          <p>주 5회 이상</p>
        </label>
      </div>
    </div>
  );
};

export default DateFrequency;
