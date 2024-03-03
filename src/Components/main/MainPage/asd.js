import { Link, useNavigate } from 'react-router-dom';
import style from './MainPage.module.css';
import MainBuddy from './MainBuddy';
import MainHonbob from './MainHonbob';
import reprot from '../../../Assets/report.png';
import { useEffect, useState } from 'react';
import honbobUse from '../../../Assets/honbobUse.png';
import buddyUse from '../../../Assets/buddyUse.png'

const images = [honbobUse, buddyUse];

const MainPage = () => {
    const navigate = useNavigate();
    const BuddyHandler = () => {
        navigate('/buddy/start1');
    };
    const HonbobHandler = () => {
        navigate('/honbob/start1');
    };
    const StudyHandler = () => {
        alert('4월 중 서비스 예정입니다!');
    };
    const reportUserHandler = () => {
        alert('너 신고');
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000); // 2초마다 이미지 변경

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (window.Kakao) {
            const script = document.createElement('script');
            script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
            script.onload = () => {
                const key = process.env.REACT_APP_KAKAO_KEY;
                window.Kakao.init(key);
            };
            document.head.appendChild(script);
        }
    }, []);

    const kakaoChat = () => {
        if (window.Kakao) {
            window.Kakao.Channel.chat({
                channelPublicId: '_AgxobG', // 여기에 채널의 고유 ID를 입력하세요.
            });
        }
    };

    return (
        <div className={style.container}>
            <div
                style={{
                    padding: '2vh',
                }}
            >
                <img
                    className={style.useImg}
                    src={images[currentImageIndex]}
                    key={currentImageIndex} // 이미지가 변경될 때마다 애니메이션 재실행
                ></img>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '5.5%',
                    }}
                >
                    <button onClick={BuddyHandler} className={style.btn}>
                        <MainBuddy />
                    </button>
                    <button onClick={HonbobHandler} className={style.btn}>
                        <MainHonbob />
                    </button>
                </div>
                <div onClick={StudyHandler} className={style.studyBtn}></div>
            </div>
            <div className={style.report_user_box}>
                <div className={style.reprot_icon} onClick={kakaoChat}>
                    <img src={reprot} alt="reprot" />
                </div>
                <span style={{ color: '#555', fontWeight: '800' }}>악성 유저 신고</span>
            </div>
        </div>
    );
};

export default MainPage;
