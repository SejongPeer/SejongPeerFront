import style from '../StudyRequirement.module.css';

const Inquire = () => {
    return (
        <div className={style.inputWrapper}>
            <input
                placeholder="(선택) 문의 채널: e-mail, 카카오 오픈채팅 등"
                className={style.titleInput}
                type="text"
            />
        </div>
    )
}

export default Inquire;