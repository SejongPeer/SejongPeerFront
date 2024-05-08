import style from './AnimalResult.module.css';

const AnimalResult = () => {
  return (
    <div className={style.container}>
      <div
        style={{
          width: '20vh',
          height: '20vh',
          backgroundColor: '#D9D9D9',
          borderRadius: '20px',
        }}
      ></div>
      <p className={style.animal_type}>강아지상</p>

      <div className={style.wrapper}>
        <p className={style.title}>동물상 특징</p>
        <p className={style.description}>
          멍멍ㅁ멈멍멍멍ㅁ멈멍멍멍ㅁ멈멍멍멍ㅁ멈멍멍멍ㅁ멈멍멍멍ㅁ멈멍멍멍ㅁ멈멍
        </p>
      </div>

      <div className={style.wrapper}>
        <p className={style.title}>대표 연예인</p>
        <p className={style.description}>김민지, 김지우, 츄, 장유진</p>
      </div>

      <div className={style.wrapper}>
        <p className={style.title}>동물상 비율?</p>
        <div className={style.ratio_container}>
          <div>
            <div></div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <button className={style.down_btn}>결과 다운받기</button>
    </div>
  );
};

export default AnimalResult;
