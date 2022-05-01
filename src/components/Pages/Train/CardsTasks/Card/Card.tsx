import React from 'react';
import classes from './Card.module.css';

interface InterfaceCard {
    title: string;
}

const Card: React.FC<InterfaceCard> = ({title}) => {

    return (
        <div className={classes.box}>
            <p>{title}</p>
        </div>
    );
}

export default Card;