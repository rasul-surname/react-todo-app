import React from 'react';
import Card from "./Card/Card";
import classes from './CardsTasks.module.css';

interface InterfaceCardsTasks {
    list: any[];
    onClick: (elem: any) => void;
    activeTab: number;
}

const CardsTasks: React.FC<InterfaceCardsTasks> = ({list, onClick, activeTab}) => {

    return (
        <div className={classes.row}>
            {list.map(elem => (<Card id={elem.id} title={elem.todo} onClick={() => onClick(elem)} activeTab={activeTab} />))}
        </div>
    );
}

export default CardsTasks;