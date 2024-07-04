import style from '../StudyRequirement.module.css';
import arrow from '../../../assets/image/down_black.png';

const Category = ({studyFilterHandler}) => {
    return (
        <div className={style.flexWrapper} onClick={studyFilterHandler}>
            <label className={style.label}>
                카테고리
            </label>

            <img
                src={arrow}
                className={style.arrowImg}
                alt="Arrow"
            />
        </div>
    )
}

export default Category;