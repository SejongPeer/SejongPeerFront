import style from './PostInput.module.css';

const PostInput = ({
    handleTextChange,
    text
}) => {
    return (
        <div className={style.textContainer}>
            <textarea
              onChange={handleTextChange}
              placeholder="내용을 입력하세요"
              className={style.contentArea}
              rows="5"
              cols="33"
            />
            <div className={style.textLength}>{text.length}/1000자</div>
        </div>
    )
}

export default PostInput;