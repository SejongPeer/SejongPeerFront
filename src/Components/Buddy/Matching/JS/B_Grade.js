import { useEffect, useState } from 'react';
import btn3 from '../CSS/B_Btn3.module.css'
import con from '../CSS/B_Container.module.css';
import check from '../../../../Assets/check.png';

const GradeDiff = (props) => {
    const [firstClicked, setFirstClicked] = useState(false);
    const [secondClicked, setSecondClicked] = useState(false);
    const [thirdClicked, setThirdClicked] = useState(false);
    const [fourthClicked, setFourthClicked] = useState(false);
    const [grade, setGrade] = useState([]);

    const click1BtnHandler = () => {
        setFirstClicked(prev => !prev);
        setGrade(prevGrade => {
            if (prevGrade.includes('1')) {
                return prevGrade.filter(item => item !== '1');
            } else {
                return [...prevGrade, '1'];
            }
        });
        console.log(grade);
        //props.sendGradeData(grade);
    };
    const click2BtnHandler = () => {
        setSecondClicked(prev => !prev);
        setGrade(prevGrade => {
            if (prevGrade.includes('2')) {
                return prevGrade.filter(item => item !== '2');
            } else {
                return [...prevGrade, '2'];
            }
        });
        console.log(grade);
        //props.sendGradeData(grade);
    };
    const click3BtnHandler = () => {
        setThirdClicked(prev => !prev);
        setGrade(prevGrade => {
            // 이미 배열에 '1'이 있으면 제거하고, 없으면 추가
            if (prevGrade.includes('3')) {
                return prevGrade.filter(item => item !== '3');
            } else {
                return [...prevGrade, '3'];
            }
        });
        console.log(grade);
        //props.sendGradeData(grade);
    };
    const click4BtnHandler = () => {
        setFourthClicked(prev => !prev);
        setGrade(prevGrade => {
            if (prevGrade.includes('4')) {
                return prevGrade.filter(item => item !== '4');
            } else {
                return [...prevGrade, '4'];
            }
        });
        console.log(grade);
        //props.sendGradeData(grade);
    };

    useEffect(() => {
        const sortedGrade = [...grade].sort((a, b) => a - b);
        props.sendGradeDiffData(sortedGrade);
        console.log(sortedGrade);
    },[grade])

    

    const clickFirstBtnColor = firstClicked ? btn3.clicked : btn3.selectBtn3;
    const clickSecondBtnColor = secondClicked ? btn3.clicked : btn3.selectBtn3;
    const clickThirdBtnColor = thirdClicked ? btn3.clicked : btn3.selectBtn3;
    const clickFourthBtnColor = fourthClicked ? btn3.clicked : btn3.selectBtn3;

    return <div className={con.container}>
        <p className={con.title}>버디가 몇학년이었으면 좋겠나요?<br/> (중복선택 가능)</p>
        <div className={con.btn3}>
            <button className={clickFirstBtnColor} onClick={click1BtnHandler}>
                <span>1학년</span>
                {firstClicked && <img className={btn3.check} src={check} alt='check'/>}
            </button>
            <button className={clickSecondBtnColor} onClick={click2BtnHandler}>
                <span>2학년</span>
                {secondClicked && <img className={btn3.check} src={check} alt='check'/>}
            </button>
            <button className={clickThirdBtnColor} onClick={click3BtnHandler}>
                <span>3학년</span>
                {thirdClicked && <img className={btn3.check} src={check} alt='check'/>}
            </button>
            <button className={clickFourthBtnColor} onClick={click4BtnHandler}>
                <span>4학년</span>
                {fourthClicked && <img className={btn3.check} src={check} alt='check'/>}
            </button>
        </div>
    </div>;
};

export default GradeDiff;