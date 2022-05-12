import React from 'react';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import classes from './Card.module.css';

interface InterfaceCard {
    id: number;
    title: string;
    onClick: () => void;
    activeTask: number;
}

const Card: React.FC<InterfaceCard> = (props) => {
	const {listTasks} = useTypedSelector(state => state.listReducer);
    const {id, title, onClick, activeTask} = props;
    const active = id === activeTask;

    return (
        <div className={active ? classes.box + ' ' + classes.active : classes.box} onClick={() => onClick()} >
			<div className={active ? classes.boxTime + ' ' + classes.active : classes.boxTime}>
				{listTasks[id - 1].minutes}
			</div>
            <p>{title}</p>
        </div>
    );
}

export default Card;