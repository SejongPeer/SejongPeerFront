import { useNavigate } from "react-router-dom";
import honbobEscape from "../../../Assets/honbobEscape.png";
import style from "./HonbobStart.module.css";

const HonbobStart1 = () => {
  const navigate = useNavigate();
  const HonbobHandler = () => {
    navigate("/honbob/start2");
  };

  return (
    <div className={style.container}>
      <div className={style.top}>
        <img
          className={style.honbobText}
          src={honbobEscape}
          alt="honbobEscape"
        />
      </div>
      <div className={style.bottom}>
        <p className={style.text}>오늘은 48명의 밥쭉꿍들이 매칭됐어요!XD </p>
        <button onClick={HonbobHandler} className={style.btn1}>
          밥짝꿍 찾기
        </button>
      </div>
    </div>
  );
};

export default HonbobStart1;
