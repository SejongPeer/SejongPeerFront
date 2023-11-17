import { useNavigate } from "react-router-dom";
import honbobEscape from "../../../Assets/honbobEscape.png";
import { useDispatch } from "react-redux";
import style from "./HonbobStart.module.css";
import { fetchData } from "../../../Redux/thunk";
import sejongHonbobcat from "../../../Assets/sejongHonbobcat.png";

const HonbobStart1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HonbobHandler = () => {
    dispatch(fetchData("Honbob", navigate("/honbob/matching")));
  };

  return (
    <div className={style.container}>
      <div className={style.top2}>
        <img
          className={style.right}
          src={sejongHonbobcat}
          alt="sejongHonbobcat"
          style={{ width: "32vh", height: "32vh" }}
        />
        <p className={style.text1}>혼밥하기 싫을땐?</p>
        <img
          className={style.honbobText}
          src={honbobEscape}
          alt="honbobEscape"
        />{" "}
      </div>

      <div className={style.bottom}>
        <p className={style.text}>오늘은 48명의 밥짝꿍들이 매칭됐어요!XD </p>
        <button onClick={HonbobHandler} className={style.btn1}>
          밥짝꿍 찾기
        </button>
      </div>
    </div>
  );
};

export default HonbobStart1;
