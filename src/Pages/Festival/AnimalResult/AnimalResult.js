import AnimalRatio from './AnimalRatio';

import instagram from '../../../Assets/image/instagram_icon.png';
import kakao from '../../../Assets/image/kakao_icon.png';
import blog from '../../../Assets/image/blog_icon.png';

import style from './AnimalResult.module.css'

const AnimalResult = () => {
    return <div className={style.container}>
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

        <button className={style.down_btn}>결과 다운받기</button>
        <div className={style.share_box}>
            <img src={instagram} className={style.icon}/>
            <img src={kakao} className={style.icon}/>
            <img src={blog} className={style.icon}/>
        </div>
        <p className={style.go_home}>홈페이지로 이동하기</p>
    </div>
};

export default AnimalResult;