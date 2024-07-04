import style from '../StudyRequirement.module.css';
import arrow from '../../../assets/image/down_black.png';

const RecruitMember = ({
    memberFilterHandler,
    startMember,
    endMember
}) => {
    return (
        <div className={style.flexWrapper} onClick={memberFilterHandler}>
            <div className={style.leftWrapper}>
                <label className={style.label}>
                    모집 인원
                </label>
                <div className={style.valueText}>
                    {' '}
                    {startMember !== 0 && endMember !== 0
                    ? `${startMember}명 ~ ${endMember}명`
                    : null}
                </div>
            </div>

            <img
                src={arrow}
                className={style.arrowImg}
                alt="Arrow"
            />
        </div>
    )
}

export default RecruitMember;