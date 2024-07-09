import style from '../StudyRequirement.module.css';

const Title = ({
    title,
    TitleHandler
}) => {
    return (
        <input
            placeholder="제목"
            className={style.titleInput}
            type="text"
            value={title}
            onChange={TitleHandler}
        />
    )
}

export default Title;