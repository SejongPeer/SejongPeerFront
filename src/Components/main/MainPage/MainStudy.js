// import studyTextRed from '../../../Assets/studyTextRed.png';
// import studyImg from '../../../Assets/studyImg.png';
import ready from "../../../Assets/ready.png";
import nugool from "../../../Assets/nugulman.png";
import style from "./MainStudy.module.css";

const MainStudy = () => {
  return (
    <div className={style.container}>
      {/* <div className={style.wrapperLeft}>
            <img className={style.left} src={studyTextRed} alt='studyTextRed'/>
            <p className={style.text}>함께 공부할 친구 찾기</p>
        </div>

        <div className={style.wrapperRight}>
            <img className={style.right} src={studyImg} alt='studyImg'/>
        </div> */}
      <div className={style.ready}>
        <img src={ready} className={style.img1} />
        <img src={nugool} className={style.img2} />
      </div>
    </div>
  );
};

export default MainStudy;
