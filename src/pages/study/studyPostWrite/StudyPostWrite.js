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
  //console.log(imgFiles)

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
  //이미지 업로드
  const imgUpload = async id => {
    const imgs = [...imgFiles];
    const imgData = {
      studyId: id,
      base64ImagesList: imgs,
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_SERVER}/image/study/upload`,
        {
          method: 'POST',
          body: JSON.stringify(imgData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Refresh-Token': localStorage.getItem('refreshToken'),
          },
        }
      );

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      console.log(data);
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      if (data.data !== null) {
        errorClassName = data.data.errorClassName;
      }
    } catch (err) {
      console.log('ErrorMessage : ', err.message);
    }
  };
  const [isFilled, setIsFilled] = useState(true);

  const submitHandler = async e => {
    const formStartDate = format(startDate, 'yyyy-MM-dd HH:mm:ss');
    const formEndDate = format(endDate, 'yyyy-MM-dd HH:mm:ss');
    const studyData =
      studyType === 'lecture'
        ? {
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
            images: null,
          }
        : {
            title: title,
            content: content,
            recruitmentCount: memberNum,
            method: selectedWay,
            frequency: selectedFrequency,
            kakaoLink: studyLink,
            questionLink: questionLink,
            externalActivityId: category,
            recruitmentStartAt: formStartDate,
            recruitmentEndAt: formEndDate,
            tags: tags,
            images: null,
          };
    console.log(studyData);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACK_SERVER}/study/${studyType}`,
        {
          method: 'POST',
          body: JSON.stringify(studyData),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Refresh-Token': localStorage.getItem('refreshToken'),
          },
        }
      );

      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
      // console.log('data : ', data.data.id);

      const studyId = data.data.id;
      imgUpload(studyId);
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
