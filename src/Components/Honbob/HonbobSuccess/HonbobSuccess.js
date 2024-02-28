import honbobSuccessImg from "../../../Assets/honbobSuccessImg.png";
import style from "./HonbobSuccess.module.css";


const HonbobSuccess = () => {

    return (
        <div className={style.container}>
            <div className={style.Text}>밥짝꿍 매칭 성공!</div>
            <div className={style.imgBox} />
            <div className={style.informBox}>
                <div className={style.innerBox}>
                    <div className={style.name}>정준수</div>
                    <div className={style.prefer}>학식 선호</div>
                    <div className={style.IdBox}>
                        <div className={style.KaKaoTitle}>카카오톡 아이디</div>
                        <div className={style.KaKaoId} >sejongsejong</div>
                    </div>
                </div>
            </div>
            <button className={style.moveToHome}>홈페이지로 이동</button>
        </div>
    );
}

export default HonbobSuccess;