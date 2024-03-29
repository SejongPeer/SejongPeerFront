import { useNavigate } from "react-router-dom";
import usermenu from "../../assets/image/usermenu.png";
import style from "./UserMenu.module.css";
import { useEffect, useState } from "react";

const UserMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  
  useEffect(() => {
    if (refreshToken === null & accessToken === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [refreshToken, accessToken]);

  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };
  const goMyPage = () => {
    navigate("/mypage");
  };

  return (
    <button className={style.wrapper}>
      {isLoggedIn ? (
        <img onClick={goMyPage} className={style.usericon} src={usermenu} alt="usericon" />
      ) : (
        <span className={style.login} onClick={goLogin}>
          로그인
        </span>
      )}
    </button>
  );
};

export default UserMenu;
