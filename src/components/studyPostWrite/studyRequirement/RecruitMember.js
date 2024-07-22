import style from '../StudyRequirement.module.css';
import arrow from '../../../assets/image/down_black.png';
import usePostStore from '../../../pages/study/studyPostWrite/usePostStore';
const RecruitMember = ({ memberFilterHandler, startMember, endMember }) => {
  const { memberNum } = usePostStore();
  return (
    <div className={style.flexWrapper} onClick={memberFilterHandler}>
      <div className={style.leftWrapper}>
        <label className={style.label}>모집 인원</label>
        <div className={style.valueText}>
          {' '}
          {memberNum ? `${memberNum}명` : null}
        </div>
      </div>

      <img src={arrow} className={style.arrowImg} alt="Arrow" />
    </div>
  );
};

export default RecruitMember;
