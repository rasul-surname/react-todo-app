import React from "react";
import {CgProfile} from "react-icons/cg";
import {MdOutlineTimer} from "react-icons/md";
import {BsCalendar3} from "react-icons/bs";
import {BiNetworkChart} from "react-icons/bi";
import {FiSettings} from "react-icons/fi";

export const SideBarData = [
    {
        title: 'Профиль',
        path: '/sport-house',
        icon: <CgProfile/>,
        cName: 'nav__text'
    },
    {
        title: 'Тренировка',
        path: '/train',
        icon: <MdOutlineTimer/>,
        cName: 'nav__text'
    },
    {
        title: 'Календарь',
        path: '/programs',
        icon: <BsCalendar3/>,
        cName: 'nav__text'
    },
    {
        title: 'Комьюнити',
        path: '/network',
        icon: <BiNetworkChart/>,
        cName: 'nav__text'
    },{
        title: 'Настройки',
        path: '/settings',
        icon: <FiSettings/>,
        cName: 'nav__text'
    },
]
