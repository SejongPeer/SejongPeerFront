import buddyTextRed from '../../../Assets/buddyTextRed.png';
import buddyImg from '../../../Assets/buddyImg.png';

import style from './MainBuddy.module.css';

const MainBuddy = () => {
    return <div className={style.container}>
        <div className={style.wrapperLeft}>
            <img className={style.left} src={buddyTextRed} alt='buddyTextRed'/>
            <p className={style.text}>새로운 캠퍼스 짝꿍 찾기</p>
        </div>

        <div className={style.wrapperRight}>
            <img className={style.right} src={buddyImg} alt='buddyImg'/>
        </div>
    </div>;
};

export default MainBuddy;