import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../Redux/thunk";
import usermenu from "../../Assets/usermenu.png";
import style from "./UserMenu.module.css";
import { useEffect, useState } from "react";

const UserMenu = () => {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    if (userId === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [userId]);

  const LoginHandler = () => {
    dispatch(fetchData("UserMenu", navigate));
  };

  return (
    <button onClick={LoginHandler} className={style.wrapper}>
      {isLoggedIn ? (
        <img className={style.usericon} src={usermenu} alt="usericon" />
      ) : (
        <span className={style.login} onClick={goLogin}>
          로그인
        </span>
      )}
    </button>
  );
};

export default UserMenu;
