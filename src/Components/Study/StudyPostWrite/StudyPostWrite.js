import style from "./StudyPostWrite.module.css";
import arrow from "../../../Assets/arrow.png";
import cancelBtn from "../../../Assets/cancelBtn.png";
import ImgPost from "../../../Assets/ImgPost.png";
import StudyWriteText from "../../../Assets/StudyWriteText.png";
import { useState } from "react";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';

const StudyPostWrite = () => {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
    };
    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null,
    });

    const setChangeDate = (dates) => {
        const [start, end] = dates;
        setDateRange({ startDate: start, endDate: end });
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
                        <div className={style.periodBox}>
                            <div className={style.periodWrapper}>
                                <div className={style.period}>모집 기간</div>

                                <img src={arrow} className={style.arrowImg} />
                            </div>
                        </div>

                        <div className={style.personNumBox}>
                            <div className={style.personNumWrapper}>
                                <div className={style.personNum}>모집 인원</div>
                                <img src={arrow} className={style.arrowImg} />
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
                        <div className={style.textLength}>{text.length}/1000자</div>
                    </div>
                    <div className={style.bottomBox}>
                        <div className={style.openChatBox}>
                            <div className={style.innerOpenChatBox}>
                                <div className={style.openChatText}>
                                    오픈채팅 링크를 통해 스터디 부원이 초대됩니다.
                                </div>
                                <input
                                    className={style.openChatInput}
                                    placeholder="오픈채팅 링크"
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
        </div>
    );
};

export default StudyPostWrite;
