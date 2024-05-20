import { useEffect, useState } from 'react';
import style from './AnimalResult.module.css'

const AnimalRatio = (props) => {
    //여자 : dog, cat, rabbit, desertFox, deer, hamster
    //남자 : dog, cat, rabbit, dinosaur, bear, wolf
    useEffect(() => {
        console.log("동물상 : " + props.animal_name);
        console.log("점수" + props.animal_score);
    }, [props.animal_name, props.animal_score])

    const ratio = {}

    return <div className={style.ratio_profile}>
        <div className={style.ratio_img}></div>
        <div className={style.ratio_right}>
            <div className={style.ratio_type}>
                <span className={style.ratio_type_name}>{props.animal_name}</span>
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