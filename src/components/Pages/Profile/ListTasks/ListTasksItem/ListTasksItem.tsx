import React from "react";
import { Checkbox } from "antd";
import { ClockCircleTwoTone, DeleteTwoTone } from "@ant-design/icons";
import classes from './ListTasksItem.module.css';

interface ListTasksItemInterface {
    id: number,
    todo: string,
    complete: boolean,
	pomodoro: number,
    onChange: (id: number, checked: boolean) => void,
    removeTask: (id: number) => void,
}

const ListTasksItem: React.FC<ListTasksItemInterface> = (props) => {
	const {id, todo, complete, pomodoro, onChange, removeTask} = props;

	let icons = [];
	for (let i = 1; i <= pomodoro; i++) {
		icons.push(i);	
	}

    return (
        <li key={id} className={classes.list_item}>
            <div className={classes.list_item_checkbox}>
                <Checkbox onChange={(e) => onChange(id, e.target.checked)} checked={complete}/>
                <div  className={classes.list_item_title}>
					{todo}
					<div className={classes.list_item_icons}>
						{icons.map((elem) => {
							return <ClockCircleTwoTone />
						})}
					</div>
				</div>
				
            </div>
            <DeleteTwoTone onClick={() => removeTask(id)} className={classes.list_item_delete} />
        </li>
    );
}

export default ListTasksItem;