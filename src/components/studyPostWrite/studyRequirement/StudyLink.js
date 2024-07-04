import style from './StudyLink.module.css';

const StudyLink = () => {
    return (
        <div className={style.openChatBox}>
            <p>
                신청 수락 시, 오픈채팅 링크(카카오ID)가 신청자에게 전달됩니다.
            </p>
            <input
                className={style.openChatInput}
                placeholder="오픈채팅 링크,또는 카카오ID 입력"
            />
        </div>
    )
}

export default StudyLink;