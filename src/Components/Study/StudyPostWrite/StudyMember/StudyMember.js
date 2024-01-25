import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import style from "./StudyMember.module.css"
import { useState } from 'react';

const StudyMember = (prop) => {


    const trackStyle = {
        backgroundColor: '#FF3838',
    };
    const handleStyle = {
        backgroundColor: '#FF3838',
        border: 'solid 2px #FF3838',
        cursor: 'pointer',
        width: '16px',
        height: '16px',
        opacity: '1',
        boxShodow: '0 0 0 3px #FFF'
    }
    const sliderwidth = {
        width: '93%'
    }


    const [sliderValue, setSliderValue] = useState([2, 8]); // 슬라이더의 초기 값

    const handleSliderChange = (value) => {
        setSliderValue(value); // 슬라이더 값을 업데이트
        prop.setStartMem(value[0]);
        prop.setEndMem(value[1]);
        console.log(value);
    };

    return (
        <div className={style.container}>
            <header className={style.header}>
                <span>모집인원</span>
            </header>
            <div className={style.filter_wrapper}>
                <Slider range
                    min={2}
                    max={8}
                    step={1}
                    defaultValue={[2, 8]}
                    allowCross={false}
                    trackStyle={trackStyle}
                    handleStyle={handleStyle}
                    style={sliderwidth}
                    onChange={handleSliderChange}
                />
                <div className={style.member_value}>
                    <span className={style.member_num}>2명</span>
                    <span className={style.member_num}>4명</span>
                    <span className={style.member_num}>6명</span>
                    <span className={style.member_num}>8명</span>
                </div>
            </div>
            <div className={style.finish}>
                <span>확인</span>
            </div>
        </div>
    );
}

export default StudyMember;