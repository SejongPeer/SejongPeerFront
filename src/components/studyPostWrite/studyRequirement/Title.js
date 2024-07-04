import style from '../StudyRequirement.module.css';

const Title = () => {
    return (
        <input
            placeholder="제목"
            className={style.titleInput}
            type="text"
        />
    )
}

export default Title;