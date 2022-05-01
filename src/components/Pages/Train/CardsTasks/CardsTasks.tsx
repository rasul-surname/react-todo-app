import React from 'react';
import Card from "./Card/Card";
import classes from './CardsTasks.module.css';

interface InterfaceCardsTasks {
    list: any[]
}

const CardsTasks: React.FC<InterfaceCardsTasks> = ({list}) => {

    return (
        <div className={classes.row}>
            {list.map((elem) => {
                return <Card title={elem.todo} />
            })}
        </div>
    );
}

export default CardsTasks;