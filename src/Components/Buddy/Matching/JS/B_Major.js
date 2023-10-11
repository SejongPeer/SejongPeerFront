import { useState } from 'react';
import check from '../../../../Assets/check.png';
import con from '../CSS/B_Container.module.css';
import btn3 from '../CSS/B_Btn3.module.css';

const Major = (props) => {
    const [isMajorClicked, setIsMajorClicked] = useState(false);
    const [isCollegeClicked, setIsCollegeClicked] = useState(false);
    const [isAnyClicked, setIsAnyClicked] = useState(false);

    const clickMajorBtnHandler = () => {
        setIsMajorClicked(!isMajorClicked);
        setIsCollegeClicked(false);
        setIsAnyClicked(false);

        const major = "우리 학과 버디";
        props.sendMajorData(major);

    };

    const clickCollegeBtnHandler = () => {
        setIsMajorClicked(false);
        setIsCollegeClicked(!isCollegeClicked);
        setIsAnyClicked(false);

        const major = "우리 단과대 버디";
        props.sendMajorData(major);

    };

    const clickAnyBtnHandler = () => {
        setIsMajorClicked(false);
        setIsCollegeClicked(false);
        setIsAnyClicked(!isAnyClicked);

        const major = "상관없음";
        props.sendMajorData(major);

    };


    const clickMajorBtnColor = isMajorClicked ? btn3.clicked : btn3.selectBtn3;
    const clickCollegeBtnColor = isCollegeClicked ? btn3.clicked : btn3.selectBtn3;
    const clickAnyBtnColor = isAnyClicked ? btn3.clicked : btn3.selectBtn3;


    return <div className={con.container}>
        <p className={con.title}>어떤 범위에서 찾길 원하시나요?</p>
        <div className={con.btn3}>
            <button 
            className={clickMajorBtnColor}
            onClick={clickMajorBtnHandler}>
            <span>우리 학과 버디</span>
            {isMajorClicked && <img className={btn3.check} src={check} alt='check'/>}</button>

            <button 
            className={clickCollegeBtnColor}
            onClick={clickCollegeBtnHandler}>
            <span>우리 단과대 버디</span>
            {isCollegeClicked && <img className={btn3.check} src={check} alt='check'/>}</button>
            
            <button 
            className={clickAnyBtnColor}
            onClick={clickAnyBtnHandler}>
            <span>상관없음</span>
            {isAnyClicked && <img className={btn3.check} src={check} alt='check'/>}</button>
        </div>
    </div>;
};

export default Major;