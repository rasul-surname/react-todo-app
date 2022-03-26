import React from 'react';
import classes from './Header.module.css';
import {Link} from "react-router-dom";

import menu from '../../img/header/menu.svg';
import profile from '../../img/header/profile.svg'
import train from '../../img/header/train.svg'
import programs from '../../img/header/programs.svg'
import network from '../../img/header/network.svg'

const Header: React.FC = () => {

    return (
        <div className={classes.header__wrapper}>
            <div className={classes.header__content}>
                <div className={classes.header__menu}>
                    <img src={menu} alt=""/>
                </div>
                <div className={classes.header__menu}>
                    <Link to="/network">
                        <img src={network} alt=""/>
                    </Link>
                </div>
                <div className={classes.header__menu}>
                    <Link to="/programs">
                        <img src={programs} alt=""/>
                    </Link>
                </div>
                <div className={classes.header__menu}>
                    <Link to="/train">
                        <img src={train} alt=""/>
                    </Link>
                </div>
                <div className={classes.header__menu}>
                    <Link to="/">
                        <img src={profile} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;