import { useState } from 'react';

import up from '../../../../Assets/up.png';
import down from '../../../../Assets/down.png';

import con from '../CSS/B_Container.module.css';
import select from '../CSS/B_Select.module.css';

const GradeDiff = (props) => {
    // 이미지 변경을 위한 상태 변수
    const [isImgUp, setIsImgUp] = useState(false);
    const [isChage, setIsChange] = useState(false);
    //selectbox 열기
    const [isClicked, setIsClicked] = useState(false);
    const selectClickedHandler = () => {
        setIsClicked(!isClicked);
        setIsImgUp(!isImgUp);
    };
    const clickSelectDisplay = {
        display: isClicked ? "block" : "none",
    };
    const changeValue = {
        border: isChage ? "3px solid #FF3838" : "1px solid #E5E5E5",
    };

    //select box에서 option 선택시 value값 넣기
    const [buttonValue, setButtonValue] = useState("학년 선택");
    const btnValueHandler = (event) => {
        setButtonValue(event.target.value);
        setIsClicked(false); //클릭시 닫히도록
        setIsImgUp(false);
        setIsChange(true);
        
        const gradeDiff = event.target.value;
        props.sendGradeDiffData(gradeDiff);
    };

    let selectColor = select.select;
    if (buttonValue !== "학년 선택"){
        selectColor = select.select1;
    }


    return <div className={con.container}>
        <p className={con.title}>버디가 몇학년이었으면 좋겠나요?<br/> (중복선택 가능)</p>
        <div>
            <button className={selectColor} onClick={selectClickedHandler} style={changeValue}>
            <div className={select.selectDiv}>
                <span>{buttonValue}</span>
                <img src={isImgUp ? up : down}  className={select.arrow} alt='arrow'/>
            </div>
            </button>

            <ul className={select.listbox} style={clickSelectDisplay}>
                <li><button className={select.list} value="1학년" 
                onClick={btnValueHandler}>1학년</button></li>
                <li><button className={select.list} value="2학년" 
                onClick={btnValueHandler}>2학년</button></li>
                <li><button className={select.list} value="3학년" 
                onClick={btnValueHandler}>3학년</button></li>
                <li><button className={select.list} value="4학년" 
                onClick={btnValueHandler}>4학년</button></li>
            </ul>
        </div>
    </div>;
};

export default GradeDiff;