import React from 'react';
import classes from './Card.module.css';

interface InterfaceCard {
    id: number;
    title: string;
    onClick: () => void;
    activeTask: number;
}

const Card: React.FC<InterfaceCard> = (props) => {
    const {id, title, onClick, activeTask} = props;
    const active = id === activeTask;

    return (
        <div className={active ? classes.box + ' ' + classes.active : classes.box} onClick={() => onClick()} >
            <p>{title}</p>
        </div>
    );
}

export default Card;