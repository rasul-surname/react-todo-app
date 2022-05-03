import React, {useState} from 'react';
import classes from './Card.module.css';

interface InterfaceCard {
    id: number;
    title: string;
    onClick: () => void;
    activeTab: number;
}

const Card: React.FC<InterfaceCard> = ({id, title, onClick, activeTab}) => {
    const active = id === activeTab;

    return (
        <div className={active ? classes.box + ' ' + classes.active : classes.box} onClick={() => onClick()} >
            <p>{title}</p>
        </div>
    );
}

export default Card;