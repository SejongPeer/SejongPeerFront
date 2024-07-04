// src/pages/StudyPostWrite.js
import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { MyContext } from '../../../App';

// modal
import BottomModal from '../../../components/modal/BottomModal';
import ConfirmModal from './confirmModal/ConfirmModal';

// components
import StudyPostField from './studyPostField/StudyPostField';
import StudyMember from './studyMember/StudyMember';

// 컴포넌트
import PostHeader from '../../../components/studyPostWrite/PostHeader';
import StudyRequirement from '../../../components/studyPostWrite/StudyRequirement';

import style from './StudyPostWrite.module.css';
import './StudyPostWriteBasic.css';
import PostInput from '../../../components/studyPostWrite/PostInput';
import Inquire from '../../../components/studyPostWrite/studyRequirement/Inquire';
import ImageUpload from '../../../components/studyPostWrite/ImageUpload';
import StudyLink from '../../../components/studyPostWrite/studyRequirement/StudyLink';
import Tag from '../../../components/studyPostWrite/studyRequirement/Tag';

const StudyPostWrite = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startMember, setStartMember] = useState(0);
  const [endMember, setEndMember] = useState(0);

  const setStartMem = num => {
    setStartMember(num);
  };
  const setEndMem = num => {
    setEndMember(num);
  };

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [text, setText] = useState('');

  const handleTextChange = e => {
    const newText = e.target.value;
    setText(newText);
  };

  const setChangeDate = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setDateRange({ startDate: start, endDate: end });
  };
  const handleDatePickerFocus = event => {
    event.target.blur();
  };

  const [isClickedStudy, setIsClickedStudy] = useState(false);
  const [isClickedMember, setIsClickedMember] = useState(false);
  const { modalOpen, setModalOpen } = useContext(MyContext);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const studyFilterHandler = () => {
    if (modalOpen) return;
    setModalOpen(true);
    setIsClickedStudy(true);
    setIsClickedMember(false);
  };

  const memberFilterHandler = () => {
    if (modalOpen) return;
    setModalOpen(true);
    setIsClickedMember(true);
    setIsClickedStudy(false);
  };

  const deleteHandler = () => {
    setModalOpen(false);
    setIsClickedStudy(false);
    setIsClickedMember(false);
  };

  const [selectedWay, setSelectedWay] = useState(null);
  const [seletedFrequency, setSeletedFrequency] = useState(null);

  const handleWayClick = option => {
    setSelectedWay(prevOption => (prevOption === option ? null : option));
  };

  const handleFrequencyClick = option => {
    setSeletedFrequency(prevOption => (prevOption === option ? null : option))
  }

  return (
    <div className={style.container}>
      <div className={style.innerConatiner}>
        <PostHeader 
        onOpenConfirmModal={openConfirmModal} 
        />

        <div className={style.contentContainer}>

          <StudyRequirement 
            startDate={startDate}
            endDate={endDate}
            setChangeDate={setChangeDate}
            dateRange={dateRange}
            handleDatePickerFocus={handleDatePickerFocus}
            format={format}
            startMember={startMember}
            endMember={endMember}
            studyFilterHandler={studyFilterHandler}
            memberFilterHandler={memberFilterHandler}
            selectedWay={selectedWay}
            handleWayClick={handleWayClick}
            seletedFrequency={seletedFrequency}
            handleFrequencyClick={handleFrequencyClick}
          />
          <PostInput 
            handleTextChange={handleTextChange}
            text={text}
          />
          <Inquire />
          <ImageUpload />
          <StudyLink />
          <Tag />

        </div>
      </div>

      <div className={style.postConainer}>
        <button className={style.postBtn}>모집글 올리기</button>
      </div>

      {modalOpen && (
        <BottomModal deleteHandler={deleteHandler}>
          {isClickedStudy && <StudyPostField />}
          {isClickedMember && (
            <StudyMember setStartMem={setStartMem} setEndMem={setEndMem} />
          )}
        </BottomModal>
      )}
      <ConfirmModal isOpen={isConfirmModalOpen} onClose={closeConfirmModal} />
    </div>
  );
};

export default StudyPostWrite;
