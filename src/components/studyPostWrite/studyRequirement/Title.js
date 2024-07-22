import style from '../StudyRequirement.module.css';
import usePostStore from '../../../pages/study/studyPostWrite/usePostStore';
const Title = () => {
  const { title, setTitle } = usePostStore();
  const handleChange = e => {
    setTitle(e.target.value);
  };
  return (
    <input
      placeholder="제목"
      className={style.titleInput}
      type="text"
      value={title}
      onChange={handleChange}
    />
  );
};

export default Title;
