import sejongHonbobcat from '../../../assets/image/sejongHonbobcat.png';
import honbobEscape from '../../../assets/image/honbobEscape.png';

import style from './MainHonbob.module.css';

const MainHonbob = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapperLeft}>
        <img className={style.left} src={honbobEscape} alt="honbobEscape" />

        <p className={style.text}>혼밥하기 싫을 때</p>
      </div>

      <div className={style.wrapperRight}>
        <img
          className={style.right}
          src={sejongHonbobcat}
          alt="sejongHonbobcat"
        />{' '}
      </div>
    </div>
  );
};

export default MainHonbob;
