import style from './BuddyAccept.module.css'
import findBuddy from '../../../Assets/findBuddy.png'

const BuddyAccept = () => {
    return <div className={style.container}>
        <p className={style.title}>버디를 찾았습니다!</p>
        <img className={style.find_buddy} src={findBuddy} alt='findBuddy'/>
        
        <div className={style.info_box}>
            <span className={style.info}>미디어커뮤니케이션학과</span>
            <div className={style.dot}></div>
            <span className={style.info}>3학년</span>
        </div>

        <div>
            <p className={style.explain}>서로 수락하면 매칭 상대에게</p>
            <p className={style.explain}>이름과 카카오톡ID가 추가로 전달 됩니다!</p>
        </div>

        <div className={style.btn_box}>
            <button className={style.decline_btn}>거절하기</button>
            <button className={style.accept_btn}>수락하기</button>
        </div>
    </div>
};

export default BuddyAccept;