// src/pages/StudyPostWrite.js
import React, { useContext, useEffect, useRef, useState } from 'react';
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

//zustand
import usePostStore from './usePostStore';
import useStudyInfoStore from '../useStudyInfoStore';
import { format } from 'date-fns';
import Category from '../../../components/studyPostWrite/studyRequirement/Category';
const StudyPostWrite = props => {
  const {
    title,
    category,
    startDate,
    endDate,
    memberNum,
    selectedWay,
    selectedFrequency,
    questionLink,
    images,
    content,
    studyLink,
    tags,
  } = usePostStore();
  const { studyType } = useStudyInfoStore();
  // setTitle(newTitle);
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
    if(props.content !== undefined) {
      setText(props.content);
    }
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

  //이미지 업로드
  const [imgFiles, setImgFiles] = useState([]);
  const imgRef = useRef();
  console.log(imgFiles)

  const ImgHandler = event => {
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

  const ImgDeleteHandler = index => {
    const newImgFiles = imgFiles.filter((_, i) => i !== index);
    setImgFiles(newImgFiles);
  };

  const [isFilled, setIsFilled] = useState(true);

  const submitHandler = async e => {
    const formStartDate = format(startDate, 'yyyy-MM-dd HH:mm:ss');
    const formEndDate = format(endDate, 'yyyy-MM-dd HH:mm:ss');
    const studyData = {
      title: title,
      content: content,
      recruitmentCount: memberNum,
      method: selectedWay,
      frequency: selectedFrequency,
      kakaoLink: studyLink,
      questionLink: questionLink,
      lectureId: category,
      recruitmentStartAt: formStartDate,
      recruitmentEndAt: formEndDate,
      tags: tags,
      images: images,
    };
    console.log(studyData)

    let serverEndpoint = process.env.REACT_APP_BACK_SERVER + '/study/lecture'
    let serverMethod = 'POST';
    console.log(props.studyId)

    if (location.pathname === "/study/modify") {
      serverEndpoint = process.env.REACT_APP_BACK_SERVER + `/study/${props.studyId}`
      serverMethod = 'PATCH'
    }

    try {
      const response = await fetch(
        serverEndpoint,
        {
          method: serverMethod,
          body: JSON.stringify(studyData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Refresh-Token': localStorage.getItem('refreshToken'),
          },
        }
      );

      // 응답 본문이 비어있는지 확인
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      if (data.data !== null) {
        errorClassName = data.data.errorClassName;
      }
    } catch (err) {
      console.log('ErrorMessage : ', err.message);

      e.preventDefault();
    }
  };

  return (
    <div className={style.container}>
      <div className={style.innerConatiner}>
        <PostHeader onOpenConfirmModal={openConfirmModal} />

        <div className={style.contentContainer}>
          <StudyRequirement
            handleDatePickerFocus={handleDatePickerFocus}
            studyFilterHandler={studyFilterHandler}
            memberFilterHandler={memberFilterHandler}
          />
          <PostInput />
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

      <div className={style.postConainer} onClick={submitHandler}>
        <SubmitBtn name={'모집글 올리기'} ready={isFilled} />
      </div>

      {modalOpen && (
        <BottomModal deleteHandler={deleteHandler}>
          {isClickedStudy && <StudyPostField />}
          {isClickedMember && <StudyMember />}
        </BottomModal>
      )}
      <ConfirmModal isOpen={isConfirmModalOpen} onClose={closeConfirmModal} />
    </div>
  );
};

export default StudyPostWrite;
