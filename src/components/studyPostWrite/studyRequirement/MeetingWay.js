import React, { useEffect } from 'react';
import style from '../StudyRequirement.module.css';

//zustand
import usePostStore from '../../../pages/study/studyPostWrite/usePostStore';

const MeetingWay = () => {
  const { selectedWay, setSelectedWay } = usePostStore();
  const handleChange = event => {
    setSelectedWay(event.target.value);
  };

  return (
    <div className={style.flexWrapper}>
      <label className={style.label}>방식</label>
      <div className={style.options}>
        <label className={style.option}>
          <input
            type="checkbox"
            value="FACE_TO_FACE"
            checked={selectedWay === 'FACE_TO_FACE'}
            onChange={handleChange}
            className={style.radioInput}
          />
          <div className={style.customCheckbox}>
            {selectedWay === 'FACE_TO_FACE' ? <div className={style.checked}></div> : <></>}
          </div>
          <p>대면</p>
        </label>
        <label className={style.option}>
          <input
            type="checkbox"
            value="NON_FACE_TO_FACE"
            checked={selectedWay === 'NON_FACE_TO_FACE'}
            onChange={handleChange}
            className={style.radioInput}
          />
          <div className={style.customCheckbox}>
          {selectedWay === 'NON_FACE_TO_FACE' ? <div className={style.checked}></div> : <></>}
          </div>
          <p>비대면</p>
        </label>
        <label
          className={style.option}
        >
          <input
            type="checkbox"
            value="BOTH"
            checked={selectedWay === 'BOTH'}
            onChange={handleChange}
            className={style.radioInput}
          />
          <div className={style.customCheckbox}>
          {selectedWay === 'BOTH' ? 
          <div className={style.checked}></div> 
          : 
          <></>}
          </div>
          <p>대면&비대면</p>
        </label>
      </div>
    </div>
  );
};

export default MeetingWay;
