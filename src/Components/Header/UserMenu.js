import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/thunk';
import usericon from '../../Assets/usermenu.png';
import style from './UserMenu.module.css';
import { useEffect, useState } from 'react';

const UserMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userId = localStorage.getItem("userId");
    console.log(userId);
    console.log(isLoggedIn);
    useEffect(() => {
        if (userId === null) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    },[userId]);
    
    const LoginHandler = () => {
        dispatch(fetchData("UserMenu", navigate));
    };

    return <button onClick={LoginHandler} className={style.wrapper}>
        {isLoggedIn ? (<img className={style.usericon} src={usericon} alt='usericon'/>
        ) : (
            <span className={style.login}>로그인</span>
        )}
    </button>;
};

export default UserMenu;