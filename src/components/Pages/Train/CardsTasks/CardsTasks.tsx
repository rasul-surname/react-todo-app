import React from 'react';
import Card from "./Card/Card";
import classes from './CardsTasks.module.css';
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

interface InterfaceCardsTasks {
    activeTaskId: number;
}

const CardsTasks: React.FC<InterfaceCardsTasks> = ({activeTaskId}) => {
    const {tasksOpen} = useTypedSelector(state => state.listReducer);

    return (
        <div className={classes.row}>
            {tasksOpen.map(elem => (<Card key={elem.id} id={elem.id} title={elem.todo} minutes={elem.minutes} activeTaskId={activeTaskId} />))}
        </div>
    );
}

export default CardsTasks;