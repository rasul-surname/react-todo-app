import React from 'react';
import classes from './Card.module.css';

interface InterfaceCard {
    title: string;
    onClick: () => void;
}

const Card: React.FC<InterfaceCard> = ({title, onClick}) => {

    return (
        <div className={classes.box} onClick={onClick}>
            <p>{title}</p>
        </div>
    );
}

export default Card;