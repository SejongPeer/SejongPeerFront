import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Redux/thunk';
import { useEffect } from 'react';
import usericon from '../../Assets/usermenu.png';
import style from './UserMenu.module.css';

const UserMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { statusCode, sourceComponent } = useSelector(state => state);

    const LoginHandler = () => {
        dispatch(fetchData("UserMenu", navigate));
    };

    // useEffect(() => {
    //     if(sourceComponent === "Usermenu"){
    //         if( statusCode === 301 ) {
    //             console.log("Navigating to /login");
    //             navigate('/login');
    //         } else if ( statusCode === 200 ){
    //             console.log("Navigating to /login/mypage");
    //             navigate('/login/mypage');
    //         }
    //     }
    // }, [sourceComponent, statusCode]);


    return <button onClick={LoginHandler} className={style.wrapper}>
        <img className={style.usericon} src={usericon} alt='usericon'/>
    </button>;
};

export default UserMenu;