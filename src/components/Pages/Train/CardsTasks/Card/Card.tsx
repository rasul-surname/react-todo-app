import React from 'react';
import {useDispatch} from "react-redux";
import {addActiveTask} from "../../../../../store/action_creators/list";
import classes from './Card.module.css';

interface InterfaceCard {
    id: number;
    title: string;
    minutes: number;
    activeTaskId: number;
}

const Card: React.FC<InterfaceCard> = ({id, title, minutes, activeTaskId}) => {
    const dispatch = useDispatch();
    const active = id === activeTaskId;

    function addTask(id: number, title: string, minutes: number) {
        dispatch(addActiveTask(id, title, minutes))
    }

    return (
        <div className={active ? classes.box + ' ' + classes.active : classes.box} onClick={() => addTask(id, title, minutes)} >
			<div className={active ? classes.boxTime + ' ' + classes.active : classes.boxTime}>
				{minutes}
			</div>
            <p>{title}</p>
        </div>
    );
}

export default Card;