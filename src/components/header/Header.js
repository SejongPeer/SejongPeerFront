import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Back from './Back';
import UserMenu from './UserMenu';

import style from './Header.module.css';

const Header = () => {
    const location = useLocation();
    const [displayUserMenu, setDisplayUserMenu] = useState(true);
    const [headerDisplay, setHeaderDisplay] = useState(style.header);


    const displayHandler = () => {
        if(location.pathname === ("/")){
            setDisplayUserMenu(true);
            setHeaderDisplay(style.headerNone);
        } else if (location.pathname.startsWith("/login")) {
            setDisplayUserMenu(false);
        } else {
            setDisplayUserMenu(true);
            setHeaderDisplay(style.header);
        }
    };
    useEffect(() => {
        displayHandler();
    }, [location.pathname]);

    return(
        <header className={headerDisplay}>
            <Back className={style.back}/>
            {displayUserMenu && <UserMenu className={style.userMenu}/>}
        </header>
    );
};

export default Header;