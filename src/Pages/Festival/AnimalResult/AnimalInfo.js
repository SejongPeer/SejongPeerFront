import style from './AnimalResult.module.css';

const AnimalInfo = (props) => {
    return (
        <div className={style.info_wrapper}>
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
        </div>
    );
};

export default AnimalInfo;