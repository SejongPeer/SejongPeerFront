import style from "./Filter_now.module.css"
import check from "../../../Assets/check.png"
import { useState } from "react";

const Filter_now = () => {
    const [isNowCheck, SetIsNowCheck] = useState(false);
    const [isFinishCheck, SetIsFinishNowCheck] = useState(false);

    const checkNowHandler = () => {
        SetIsNowCheck(!isNowCheck)
    }
    const checkFinishHandler = () => {
        SetIsFinishNowCheck(!isFinishCheck)
    }

    const finishBtn = isNowCheck || isFinishCheck ? style.finish : style.finish_n;
    return <div className={style.container}>
        <header className={style.header}>
            <span>모집여부</span>
        </header>
        <div className={style.filter_wrapper}>
            <div className={style.filter_check_wrapper}>
                <p>모집 중</p>
                <div onClick={checkNowHandler}>
                    {isNowCheck && <img className={style.check} src={check} alt="check"/>}
                </div>
            </div>
            <div className={style.filter_check_wrapper}>
                <p>모집 마감</p>
                <div onClick={checkFinishHandler}>
                    {isFinishCheck && <img className={style.check} src={check} alt="check"/>}
                </div>
            </div>
        </div>
        <div className={finishBtn}>
            <span>확인</span>
        </div>
    </div>
};

export default Filter_now;