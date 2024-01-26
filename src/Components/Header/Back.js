import { useNavigate } from "react-router-dom";
import backicon from "../../Assets/back.png";
import sejongpeertext from "../../Assets/sejongpeertext.png";
import { useLocation } from "react-router-dom";
import peerCat from "../../Assets/peerCat.png";
import sejongStudy from "../../Assets/sejongStudy.png";
import style from "./Back.module.css";

const Back = () => {
  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/main");
  };
  const goLoginHandler = () => {
    navigate("/login");
  };
  const warningMessage = () => {
    const backToMain = window.confirm(
      "확인을 누르면 메인 화면으로 이동합니다.\n지금까지 작성한 내용들이 모두 초기화 됩니다."
    );
    if (backToMain) {
      navigate("/main");
    }
  };

  const location = useLocation();

  const ChangeBack = () => {
    if (location.pathname.startsWith("/login/")) {
      goLoginHandler();
    } else if (location.pathname === "/buddy/matching") {
      warningMessage();
    } else {
      backHandler();
    }
  };
  const isMain = location.pathname === "/main" ? true : false;
  const isStudy = location.pathname === "/study" ? true : false;
  const isStudyDetail = location.pathname === "/studydetail" ? true : false;
  const isPost = location.pathname === "/studypost" ? true : false;

  return (
    <button onClick={ChangeBack} className={style.wrapper}>
      {location.pathname !== "/main" && (
        <img className={style.backicon} src={backicon} alt="backicon" />
      )}
      {isMain && (
        <img
          className={style.sejongpeertext}
          src={sejongpeertext}
          alt="textLogo"
        />
      )}
      {isStudy && (
        <img
          className={style.sejongpeerlogo}
          src={sejongStudy}
          alt="sejongpeerlogo"
        />
      )}
      {isStudyDetail && (
        <img
          className={style.sejongpeerlogo}
          src={sejongStudy}
          alt="sejongpeerlogo"
        />
      )}
      {isPost && (
        <img
          className={style.sejongpeerlogo}
          src={sejongStudy}
          alt="sejongpeerlogo"
        />
      )}
    </button>
  );
};

export default Back;
