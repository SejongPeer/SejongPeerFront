import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import AnimalRatio from './AnimalRatio';

import style from './AnimalResult.module.css';
import AnimalInfo from './AnimalInfo';
import { useNavigate } from 'react-router-dom';

const AnimalResult = () => {
    const captureRef = useRef(null); // useRef를 사용하여 DOM 요소 참조
    const isFirstRender = useRef(true);
    const userId = 12345;
    const [result, setResult] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (isFirstRender.current) {
            getResult();
        }
    }, []);

    const goHome = () => {
        navigate('/main');
    }

    const getResult = async() => {
        if (userId) {
            try {
                const response = await axios.get(`${process.env.REACT_APP_FEST_SERVER}/measurements/download`, {
                    params: {
                        studentId: userId
                    }
                });
                const sort_result = response.data.data.scores.sort((a, b) => b.score - a.score);
                setResult(sort_result);
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('해당 사용자를 찾을 수 없습니다.');
        }
    }

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
            <AnimalInfo />
            <div className={style.wrapper}>
                <p className={style.title}>동물상 비율</p>
                <div className={style.ratio_container}> 
                    {result.slice(0, 5).map((animal, index) => (
                        <AnimalRatio
                        key={index}
                        animal_name={animal.animal}
                        animal_score={animal.score}
                        />
                    ))}
                </div>
            </div>
        </div>
        <button onClick={captureElement} className={style.down_btn}>결과 다운받기</button>
        <p 
        className={style.go_home}
        onClick={goHome}>홈페이지로 이동하기</p>
    </div>
};

export default AnimalResult;
