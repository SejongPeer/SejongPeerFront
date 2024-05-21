import ANIMAL_TYPE from '../../../constants/animal/animal_info';
import style from './AnimalResult.module.css';

const AnimalRatio = (props) => {
    const name = ANIMAL_TYPE.find(a => a.id === props.animal_name);

    return <div className={style.ratio_profile}>
        <div className={style.ratio_img}></div>
        <div className={style.ratio_right}>
            <div className={style.ratio_type}>
                <span className={style.ratio_type_name}>{name.name}</span>
                <span className={style.ratio_percent}>{props.animal_score}%</span>
            </div>
            <div  className={style.ratio_bar}>
                <div className={style.ratio_back}
                style={{width:`${props.animal_score}%`}}></div>
            </div>
        </div>
    </div>
};

export default AnimalRatio;