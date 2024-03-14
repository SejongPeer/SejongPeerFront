import style from './BuddySuccess.module.css';

const BuddyInfoBox = (props) => {
    return <div className={style.info_box}>
        <div className={style.info_wrapper}>
            <p className={style.info_name}>{props.name}</p>
            <p className={style.info}>{props.major}</p>
            <p className={style.info}>{props.grade}학년</p>
        </div>

        <div className={style.info_kakao_box}>
            <span className={style.kakao_title}>카카오톡 아이디</span>
            <span className={style.kakao_id}>{props.kakao}</span>
        </div>
    </div>
};

export default BuddyInfoBox;