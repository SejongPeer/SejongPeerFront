import { useState, useEffect } from 'react';
import ChoiceGender from './B_Gender';
import Grade from './B_BuddyType';
import Major from './B_Major';
import GradeDiff from './B_Grade';
import PhoneNum from './U_PhoneNum';
import Final from './Buddy_Final';
import ProgressBar from '../../ProgressBar/ProgressBar.js';

import style from '../CSS/Buddy_Matching.module.css';

const Buddy_Matching = () => {
    const [slide, setSlide] = useState(0);

    const [choiceGender, setChoiceGender] = useState('');
    const [grade, setGrade] = useState('');
    const [major, setMajor] = useState('');
    const [gradeDiff, setGradeDiff] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [kakao, setKakao] = useState('');

    // 화면 넘기기 (다음 / 이전)

    // 화면 넓이 설정
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            let wrapperWidth = width;
        if (window.innerWidth < 415){
            wrapperWidth = window.innerWidth;
        } else {
            wrapperWidth = 414;
        }
        setWidth(wrapperWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, [width]);
    
    const mediaWidth = {
        width: width
    };

    //다음
    const MoveNext = () => {
        setSlide(slide + 1);
        if ( slide >= 5) {
            setSlide(5);
        }
    };

    //이전
    const MoveBefore = () => {
        setSlide(slide - 1);
        if ( slide <= 0){
            setSlide(0);
        }
    };

    // 슬라이드별 이동
    const Slide = {
        transform: "translateX(" + (-width * slide) + "px)"
    };

    //Final에서
    const slideMove = (page) => {
        console.log("페이지 이동 " + page);
        setSlide(page);
    }


    //사용자가 입력한 정보
    const GenderChoiceData = (choiceGender) => {
        console.log("동성이성 : " + choiceGender);
        setChoiceGender(choiceGender);
    };
    const GradeData = (grade) => {
        console.log("어떤 짝 : " + grade);
        setGrade(grade);
    };
    const MajorData = (major) => {
        console.log("범위 : " + major);
        setMajor(major);
    };
    const GradeDiffData = (gradeDiff) => {
        console.log("학년차이 : " + gradeDiff);
        setGradeDiff(gradeDiff);
    };
    const PhoneNumData = (phoneNum) => {
        console.log("핸드폰 : " + phoneNum);
        setPhoneNum(phoneNum);
    };
    const KaKaoData = (kakao) => {
        console.log("카톡 : " + kakao);
        setKakao(kakao);
    }; 

    return <div className={style.wrapper} style={mediaWidth}>
        <div className={style.formWrapper} style={Slide}>
            <ChoiceGender sendChoiceGenderData={GenderChoiceData}/>
            <Grade sendGradeData={GradeData}/>
            <Major sendMajorData={MajorData}/>
            <GradeDiff sendGradeDiffData={GradeDiffData}/>
            <PhoneNum
            sendPhoneNumData={PhoneNumData} 
            sendKakaoData={KaKaoData}/>
            <Final 
            choiceGender={choiceGender} 
            grade={grade} 
            major={major} 
            gradeDiff={gradeDiff} 
            phoneNum={phoneNum} 
            kakao={kakao}
            slideMove={slideMove}

            />
        </div>
        <ProgressBar 
        moveNext={MoveNext} 
        moveBefore={MoveBefore} 
        slide = {slide}
        setSlide = {setSlide}
        choiceGender={choiceGender} 
        grade={grade} 
        major={major} 
        gradeDiff={gradeDiff} 
        phoneNum={phoneNum} 
        kakao={kakao}
        />
    </div>;
};

export default Buddy_Matching;