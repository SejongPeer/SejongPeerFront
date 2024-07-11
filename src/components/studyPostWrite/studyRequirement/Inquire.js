import style from '../StudyRequirement.module.css';
import usePostStore from '../../../pages/study/studyPostWrite/usePostStore';
const Inquire = () => {
  const { questionLink, setQuestionLink } = usePostStore();
  const handleLinkChange = e => {
    setQuestionLink(e.target.value);
  };
  return (
    <div className={style.inputWrapper}>
      <input
        onChange={handleLinkChange}
        value={questionLink}
        placeholder="(선택) 문의 채널: e-mail, 카카오 오픈채팅 등"
        className={style.titleInput}
        type="text"
      />
    </div>
  );
};

export default Inquire;
