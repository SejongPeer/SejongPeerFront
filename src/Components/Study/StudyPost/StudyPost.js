import style from "./StudyPost.module.css";
import arrow from "../../../Assets/arrow.png";
import cancelBtn from "../../../Assets/cancelBtn.png";
import ImgPost from "../../../Assets/ImgPost.png";
import StudyWriteText from "../../../Assets/StudyWriteText.png";
import { useState } from "react";

const StudyPost = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  return (
    <div className={style.container}>
      <div className={style.innerConatiner}>
        <div className={style.header}>
          <div className={style.leftBox}>
            <button className={style.cancelBtn}>
              <img src={cancelBtn} className={style.cancelBtnImg} />
            </button>
            <div className={style.textImgWrapper}>
              <img src={StudyWriteText} className={style.textImg} />
            </div>
          </div>
          <div className={style.rightBox}>
            <button className={style.imgAddText}>사진 추가</button>
            <button className={style.imgAddWrapper}>
              <img src={ImgPost} className={style.imgAdd} />
            </button>
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

export default StudyPost;
