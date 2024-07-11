import style from './PostInput.module.css';
import usePostStore from '../../pages/study/studyPostWrite/usePostStore';
const PostInput = () => {
  const { content, setContent } = usePostStore();
  const handleContentChange = e => {
    setContent(e.target.value);
  };
  return (
    <div className={style.textContainer}>
      <textarea
        onChange={handleContentChange}
        placeholder="내용을 입력하세요"
        className={style.contentArea}
        rows="5"
        cols="33"
        value={content}
      />
      <div className={style.textLength}>{content.length}/1000자</div>
    </div>
  );
};

export default PostInput;
