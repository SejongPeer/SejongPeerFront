import con from "../CSS/H_Container.module.css";
import style from "../CSS/H_informCheck.module.css";
const H_informCheck = () => {
    return (
        <div className={con.container}>
            <p className={con.title}>입력하신 정보를 확인해주세요.</p>
            <div className={style.informContainer}>
                <div className={style.genderCon}>
                    <div><span style={{ color: "#FF7474", fontSize: "2.5vh" }} >•</span> 밥짝꿍 성별</div>

                    <div className={style.divBox}>상관없음</div>
                </div>
                <div className={style.menuCon}>
                    <div><span style={{ color: "#FF7474", fontSize: "2.5vh" }} >•</span> 선호 메뉴</div>
                    <div className={style.divBox}>양식</div>
                </div>
                <div className={style.kakaoCon}>
                    <div><span style={{ color: "#FF7474", fontSize: "2.5vh" }} >•</span> 카카오톡 아이디</div>
                    <div className={style.divBox}>sejongpeer</div>
                </div>
                <div className={style.phoneNumCon}>
                    <div><span style={{ color: "#FF7474", fontSize: "2.5vh" }} >•</span> 전화번호</div>
                    <div className={style.divBox}>010-1234-5678</div>
                </div>
            </div>
        </div>);
}

export default H_informCheck
