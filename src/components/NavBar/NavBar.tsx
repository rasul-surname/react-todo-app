import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {SideBarData} from "./SideBarData";
import {IconContext} from 'react-icons';

import {RiMenuUnfoldFill, RiMenuFoldFill} from "react-icons/ri";

import classes from './NavBar.module.css';

const NavBar: React.FC = () => {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className={classes.navbar}>
                    <Link to='#' className={classes.menu__bars}>
                        <RiMenuUnfoldFill onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? classes.nav__menu + ' ' + classes.nav__menu__active : classes.nav__menu}>
                    <ul className={classes.nav__menu__items} onClick={showSidebar}>
                        <li className={classes.navbar__toggle}>
                            <Link to='#' className={classes.menu__bars}>
                                <RiMenuFoldFill/>
                            </Link>
                        </li>
                        {SideBarData.map((item: any, index: number) => {
                            return (
                                <li key={index} className={classes.nav__text}>
                                    <Link to={item.path}>
                                        <div>{item.icon}</div>
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default NavBar;