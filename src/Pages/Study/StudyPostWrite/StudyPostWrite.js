import style from './StudyPostWrite.module.css';
import arrow from '../../../assets/image/down_arrow_black.png';
import cancelBtn from '../../../assets/cancelBtn.png';
import ImgPost from '../../../assets/ImgPost.png';
import StudyWriteText from '../../../assets/StudyWriteText.png';
import { useContext, useState } from 'react';
import './StudyPostWriteBasic.css';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import { parseISO, format } from 'date-fns';

import { MyContext } from '../../../App';
import BottomModal from '../../../components/Modal/BottomModal';
import StudyPostField from './StudyPostField/StudyPostField';
import StudyMember from './StudyMember/StudyMember';

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

  const studyFilterHandler = () => {
    setModalOpen(!modalOpen);
    setIsClickedStudy(true);
  };
  const memberFilterHandler = () => {
    setModalOpen(!modalOpen);
    setIsClickedMember(true);
  };
  const deleteHandler = () => {
    setIsClickedStudy(false);
  };

  return (
    <div className={style.container}>
      <div className={style.innerConatiner}>
        <div className={style.header}>
          <div className={style.leftBox}>
            <img src={cancelBtn} className={style.cancelBtn}></img>
            <img src={StudyWriteText} className={style.textImgWrapper}></img>
          </div>
          <div className={style.rightBox}>
            <p className={style.addpostText}>사진 추가</p>
            <img src={ImgPost} className={style.imgAddWrapper}></img>
          </div>
        </div>
        <div className={style.contentContainer}>
          <div className={style.topBox}>
            <div className={style.titleBox}>
              <input
                placeholder="제목"
                className={style.titleInput}
                type="text"
              />
            </div>
            <div className={style.categoryBox}>
              <div className={style.categoryWrapper}>
                <div className={style.category}>카테고리</div>
                <img
                  src={arrow}
                  className={style.arrowImg}
                  onClick={studyFilterHandler}
                />
              </div>
            </div>
            <div className={style.periodBox}>
              <div className={style.periodWrapper}>
                <div className={style.periodLeft}>
                  <div className={style.period}>모집 기간</div>

                  <div className={style.periodDate}>
                    {startDate && endDate
                      ? `${format(startDate, 'M월 d일')} ~ ${format(
                          endDate,
                          'M월 d일'
                        )}`
                      : null}
                  </div>
                </div>

                <div className={style.datePickerContainer}>
                  <DatePicker
                    className={style.datePicker}
                    selectsRange={true}
                    locale={ko}
                    dateFormat="MM월dd일"
                    selected={dateRange.startDate}
                    startDate={dateRange.startDate}
                    endDate={dateRange.endDate}
                    onChange={dates => setChangeDate(dates)}
                    onFocus={handleDatePickerFocus}
                    showPopperArrow={false}
                  />
                </div>
              </div>
            </div>

            <div className={style.personNumBox}>
              <div className={style.personNumWrapper}>
                <div className={style.personNumLeft}>
                  <div className={style.personNum}>모집 인원</div>
                  <div className={style.personNumber}>
                    {' '}
                    {startMember !== 0 && endMember !== 0
                      ? `${startMember}명 ~ ${endMember}명`
                      : null}
                  </div>
                </div>

                <img
                  src={arrow}
                  className={style.arrowImg}
                  onClick={memberFilterHandler}
                />
              </div>
            </div>
          </div>
          <div className={style.middleBox}>
            <textarea
              onChange={handleTextChange}
              placeholder="내용을 입력하세요"
              className={style.contentArea}
              rows="5"
              cols="33"
            />
            <div className={style.textLengthBox}>
              <div className={style.textLength}>{text.length}/1000자</div>
            </div>
          </div>
          <div className={style.bottomBox}>
            <div className={style.openChatBox}>
              <div className={style.innerOpenChatBox}>
                <div className={style.openChatText}>
                  신청 수락 시, 오픈채팅 링크(카카오ID)가 신청자에게 전달됩니다.
                </div>
                <input
                  className={style.openChatInput}
                  placeholder="오픈채팅 링크,또는 카카오ID 입력"
                />
              </div>
            </div>
            <div className={style.tagBox}>
              <input
                className={style.tagInput}
                placeholder="(선택) #태그입력(최대 3개)"
              />
            </div>
          </div>
        </div>
        <div className={style.postConainer}>
          <button className={style.postBtn}>모집글 올리기</button>
        </div>
      </div>
      {modalOpen && (
        <BottomModal deleteHandler={deleteHandler}>
          {isClickedStudy && <StudyPostField />}
          {isClickedMember && (
            <StudyMember setStartMem={setStartMem} setEndMem={setEndMem} />
          )}
        </BottomModal>
      )}
    </div>
  );
};

export default StudyPostWrite;
