import React from 'react';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import classes from './Card.module.css';

interface InterfaceCard {
    id: number;
    title: string;
    onClick: () => void;
    taskId: number;
}

const Card: React.FC<InterfaceCard> = (props) => {
	const {tasksOpen} = useTypedSelector(state => state.listReducer);
    const {id, title, onClick, taskId} = props;
    const active = id === taskId;

    return (
        <div className={active ? classes.box + ' ' + classes.active : classes.box} onClick={() => onClick()} >
			<div className={active ? classes.boxTime + ' ' + classes.active : classes.boxTime}>
				{tasksOpen[id - 1].minutes}
			</div>
            <p>{title}</p>
        </div>
    );
}

export default Card;