import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import AnimalRatio from './AnimalRatio';

import instagram from '../../../Assets/image/instagram_icon.png';
import kakao from '../../../Assets/image/kakao_icon.png';
import blog from '../../../Assets/image/blog_icon.png';

import style from './AnimalResult.module.css'

const AnimalResult = () => {
    const captureRef = useRef(null); // useRef를 사용하여 DOM 요소 참조

    const captureElement = async () => {
        if (captureRef.current) {
            const canvas = await html2canvas(captureRef.current);
            const image = canvas.toDataURL('image/png');
            // 이미지 다운로드
            const link = document.createElement('a');
            link.download = '동물상결과.png';
            link.href = image;
            link.click();
        }
    };

    return <div className={style.container}>
        <div ref={captureRef} className={style.capture_container}>
            <div
                style={{
                width: '215px',
                height: '215px',
                backgroundColor: '#D9D9D9',
                borderRadius: '20px',
                }}
            ></div>
            <p className={style.animal_type}>강아지상</p>

            <div className={style.wrapper}>
                <p className={style.title}>동물상 특징</p>
                <p className={style.description}>멍멍ㅁ멈멍멍멍ㅁ멈멍멍멍ㅁ멈멍멍멍ㅁ멈멍멍멍ㅁ멈멍멍멍ㅁ멈멍멍멍ㅁ멈멍</p>
            </div>

            <div className={style.wrapper}>
                <p className={style.title}>대표 연예인</p>
                <p className={style.description}>김민지, 김지우, 츄, 장유진</p>
            </div>

            <div className={style.wrapper}>
                <p className={style.title}>동물상 비율?</p>
                <div className={style.ratio_container}> 
                    <AnimalRatio />
                    <AnimalRatio />
                    <AnimalRatio />
                    <AnimalRatio />
                    <AnimalRatio />
                </div>
            </div>
        </div>
        <button onClick={captureElement} className={style.down_btn}>결과 다운받기</button>
        <p className={style.go_home}>홈페이지로 이동하기</p>
    </div>
};

export default AnimalResult;