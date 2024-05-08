import style from './AnimalResult.module.css'

const AnimalRatio = () => {
    return <div className={style.ratio_profile}>
        <div className={style.ratio_img}></div>
        <div className={style.ratio_right}>
            <div className={style.ratio_type}>
                <span className={style.ratio_type_name}>강아지</span>
                <span className={style.ratio_percent}>72%</span>
            </div>
            <div  className={style.ratio_bar}>
                <div className={style.ratio_back}></div>
                <div className={style.ratio_color}></div>
            </div>
        </div>
    </div>
};

export default AnimalRatio;