import style from './BuddySuccess.module.css'
import buddySucces from '../../../Assets/buddySuccess.png'

const BuddySuccess = () => {
    return <div className={style.container}>
        <p className={style.title}>버디를 찾았습니다!</p>
        <img className={style.buddy_succes} src={buddySucces} alt='buddySucces'/>

        <div className={style.info_box}>
            <div className={style.info_wrapper}>
                <p className={style.info_name}>정준수</p>
                <p className={style.info}>미디어커뮤니케이션학과</p>
                <p className={style.info}>3학년</p>
            </div>
        
            <div className={style.info_kakao_box}>
                <span className={style.kakao_title}>카카오톡 아이디</span>
                <span className={style.kakao_id}>sejongpeer</span>
            </div>
        </div>

        <button className={style.go_home}>홈페이지로 이동</button>
    </div>
};

export default BuddySuccess;