import style from '../StudyRequirement.module.css';

const Tag = () => {
    return (
        <div className={style.inputWrapper} style={{margin : '0 0 74px 0'}}>
            <input
                placeholder="(선택) #태그입력_최대_3개 (예: #팀플, #프로젝트)"
                className={style.titleInput}
                type="text"
            />
        </div>
    )
}

export default Tag;