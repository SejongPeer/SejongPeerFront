import style from '../AnimalResult/AnimalResult.module.css'
import kakao from '../../../Assets/kakao.png'
// 동물상 미팅 결과 확인 페이지
const AnimalResult = () => {
    return (
        <div className={style.container1}>
            <h1>동물상형 미팅</h1>
            <div className={style.container2}>
                <button className={style.apply}>동물상 미팅 신청하기</button>
                <button className={style.apply}>매칭 결과 확인하기</button>
            </div>
            <div className={style.container3}>
                <button className={style.festUse}></button>
                <button className={style.kakao}>
                    <img src={kakao} alt="카카오톡 문의하기" />
                    카카오톡 문의하기
                </button>
            </div>
        </div>
    )
}

export default AnimalResult