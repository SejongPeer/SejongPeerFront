import { useState } from 'react';
import style from './GenderSignUp.module.css';

const GenderSignUp = (props) => {
    const [maleCilcked, setMaleClicked] = useState(false);
    const [femaleCilcked, setFemaleClicked] = useState(false);
    const maleClickHandler = (e) => {
        setMaleClicked(true);
        setFemaleClicked(false);
        props.genderData("male");
        e.preventDefault();
    }
    const femaleClickHandler = (e) => {
        setMaleClicked(false);
        setFemaleClicked(true);
        props.genderData("female");
        e.preventDefault();
    }

    const clickMaleBtnColor = maleCilcked ? style.clicked : style.btn;
    const clickFemaleBtnColor = femaleCilcked ? style.clicked : style.btn;
    return <div className={style.genderContainer}>

        <button 
        className={clickMaleBtnColor} 
        onClick={maleClickHandler}>
        남자
        </button>

        <button className={clickFemaleBtnColor} 
        onClick={femaleClickHandler}>
        여자
        </button>

    </div>;
};

export default GenderSignUp;