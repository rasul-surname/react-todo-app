import React from "react";
import {CgProfile} from "react-icons/cg";
import {MdOutlineTimer} from "react-icons/md";
import {BsCalendar3} from "react-icons/bs";
import {BiNetworkChart} from "react-icons/bi";

export const SideBarData = [
    {
        title: 'Profile',
        path: '/react-sport-house',
        icon: <CgProfile/>,
        cName: 'nav__text'
    },
    {
        title: 'Train',
        path: '/train',
        icon: <MdOutlineTimer/>,
        cName: 'nav__text'
    },
    {
        title: 'Programs',
        path: '/programs',
        icon: <BsCalendar3/>,
        cName: 'nav__text'
    },
    {
        title: 'Network',
        path: '/network',
        icon: <BiNetworkChart/>,
        cName: 'nav__text'
    },
]