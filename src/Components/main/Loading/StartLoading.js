import { useNavigate } from "react-router-dom";
import logo from "../../../Assets/peerLogoRed.png";
import style from "./StartLoading.module.css";
import Loadinglogo from "./LoadingLogo";

const StartLoading = () => {
  const navigate = useNavigate();
  const MainHandler = () => {
    navigate("/main");
  };

  return (
    <div className={style.container}>
      <button onClick={MainHandler} className={style.start}>
        <Loadinglogo />
        {/*<img className={style.textLogo} 
            src={logo} alt='logo'/>*/}
      </button>
    </div>
  );
};

export default StartLoading;
