import { useState } from 'react';
import check from '../../../../Assets/check.png';
import con from '../CSS/B_Container.module.css';
import btn3 from '../CSS/B_Btn3.module.css';

const Grade = (props) => {
    const [isSeniorClicked, setIsSeniorClicked] = useState(false);
    const [isJuniorClicked, setIsJuniorClicked] = useState(false);
    const [isMateClicked, setIsMateClicked] = useState(false);
    const [isAnyClicked, setIsAnyClicked] = useState(false)

    const clickSeniorBtnHandler = () => {
        setIsSeniorClicked(true);
        setIsJuniorClicked(false);
        setIsMateClicked(false);
        setIsAnyClicked(false);

        const grade = "선배";
        props.sendGradeData(grade);

    };

    const clickJuniorBtnHandler = () => {
        setIsSeniorClicked(false);
        setIsJuniorClicked(true);
        setIsMateClicked(false);
        setIsAnyClicked(false);

        const grade = "후배";
        props.sendGradeData(grade);

    };
    const clickMateBtnHandler = () => {
        setIsSeniorClicked(false);
        setIsJuniorClicked(false);
        setIsMateClicked(true);
        setIsAnyClicked(false);

        const grade = "동기";
        props.sendGradeData(grade);

    };

    const clickAnyBtnHandler = () => {
        setIsSeniorClicked(false);
        setIsJuniorClicked(false);
        setIsMateClicked(false);
        setIsAnyClicked(true);

        const grade = "상관없음";
        props.sendGradeData(grade);

    };

    const clickSeniorBtnColor = isSeniorClicked ? btn3.clicked : btn3.selectBtn3;
    const clickJuniorBtnColor = isJuniorClicked ? btn3.clicked : btn3.selectBtn3;
    const clickMateBtnColor = isMateClicked ? btn3.clicked : btn3.selectBtn3;
    const clickAnyBtnColor = isAnyClicked ? btn3.clicked : btn3.selectBtn3;


    return <div className={con.container}>
        <p className={con.title2}>(학번기준)</p>
        <p className={con.title}>어떤 버디를 원하시나요?</p>
        <div className={con.btn3}>
            <button 
            className={clickSeniorBtnColor}
            onClick={clickSeniorBtnHandler}>
            <span>선배</span>
            {isSeniorClicked && <img className={btn3.check} src={check} alt='check'/>}
            </button>
            <button 
            className={clickJuniorBtnColor} 
            onClick={clickJuniorBtnHandler}>
            <span>후배</span>
            {isJuniorClicked && <img className={btn3.check} src={check} alt='check'/>}
            </button>
            <button 
            className={clickMateBtnColor} 
            onClick={clickMateBtnHandler}>
            <span>동기</span>
            {isMateClicked && <img className={btn3.check} src={check} alt='check'/>}</button>
            <button 
            className={clickAnyBtnColor} 
            onClick={clickAnyBtnHandler}>
            <span>상관없음</span>
            {isAnyClicked && <img className={btn3.check} src={check} alt='check'/>}</button>
        </div>
    </div>;
};

export default Grade;