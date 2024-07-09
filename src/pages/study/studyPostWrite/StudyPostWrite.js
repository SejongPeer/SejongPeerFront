// src/pages/StudyPostWrite.js
import React, { useContext, useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { MyContext } from '../../../App';

// modal
import BottomModal from '../../../components/modal/BottomModal';
import ConfirmModal from './confirmModal/ConfirmModal';

// modal components
import StudyPostField from './studyPostField/StudyPostField';
import StudyMember from './studyMember/StudyMember';

// components
import PostHeader from '../../../components/studyPostWrite/PostHeader';
import StudyRequirement from '../../../components/studyPostWrite/StudyRequirement';
import PostInput from '../../../components/studyPostWrite/PostInput';
import Inquire from '../../../components/studyPostWrite/studyRequirement/Inquire';
import ImageUpload from '../../../components/studyPostWrite/ImageUpload';
import StudyLink from '../../../components/studyPostWrite/studyRequirement/StudyLink';
import Tag from '../../../components/studyPostWrite/studyRequirement/Tag';

import style from './StudyPostWrite.module.css';
import './StudyPostWriteBasic.css';
import SubmitBtn from '../../../components/button/submitButton/SubmitBtn';

const StudyPostWrite = (props) => {
  //제목
  const [title, setTitle] = useState(props.title);
  const TitleHandler = e => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  }
  // 모집 기간, 모집 인원
  const [startDate, setStartDate] = useState(props.recruitmentStart);
  const [endDate, setEndDate] = useState(props.recruitmentEnd);
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

  useEffect(() => {
    setText(props.content);
  }, [props.content])

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

  // 모달 오픈, 
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

  // 모임 빈도, 방식
  const [selectedWay, setSelectedWay] = useState(null);
  const [seletedFrequency, setSeletedFrequency] = useState(null);

  const handleWayClick = option => {
    setSelectedWay(prevOption => (prevOption === option ? null : option));
  };

  const handleFrequencyClick = option => {
    setSeletedFrequency(prevOption => (prevOption === option ? null : option))
  }

  //이미지 업로드
  const [imgFiles, setImgFiles] = useState([]);
  const imgRef = useRef();
  //console.log(imgFiles)

  const ImgHandler = (event) => {
    const files = Array.from(event.target.files);
    const newImgFiles = [...imgFiles];

    files.forEach(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (newImgFiles.length < 3) {
                newImgFiles.push(reader.result);
                setImgFiles([...newImgFiles]);
            }
        };
    });
    event.target.value = '';
  };

  const ImgDeleteHandler = (index) => {
    const newImgFiles = imgFiles.filter((_, i) => i !== index);
    setImgFiles(newImgFiles);
  }

  const [isFilled, setIsFilled] = useState(true);

  return (
    <div className={style.container}>
      <div className={style.innerConatiner}>
        <PostHeader 
        onOpenConfirmModal={openConfirmModal} 
        />

        <div className={style.contentContainer}>

          <StudyRequirement 
            title = {title}
            TitleHandler = {TitleHandler}
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
          <ImageUpload 
            imgFiles={imgFiles}
            ImgHandler={ImgHandler}
            imgRef={imgRef}
            ImgDeleteHandler={ImgDeleteHandler}
          />
          <StudyLink />
          <Tag />

        </div>
      </div>

      <div className={style.postConainer}>
        <SubmitBtn 
          name={'모집글 올리기'}
          ready={isFilled}
        />
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
