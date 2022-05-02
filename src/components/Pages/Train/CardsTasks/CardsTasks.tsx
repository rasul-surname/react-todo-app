import React from 'react';
import Card from "./Card/Card";
import classes from './CardsTasks.module.css';

interface InterfaceCardsTasks {
    list: any[];
    onClick: (elem: any) => void;
}

const CardsTasks: React.FC<InterfaceCardsTasks> = ({list, onClick}) => {

    return (
        <div className={classes.row}>
            {list.map(elem => (<Card title={elem.todo} onClick={() => onClick(elem)} />))}
        </div>
    );
}

export default CardsTasks;