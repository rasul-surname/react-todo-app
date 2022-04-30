import React from "react";
import { Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import classes from './ListTasksItem.module.css';

interface ListTasksItemInterface {
    id: number,
    todo: string,
    complete: boolean,
    onChange: (id: number, checked: boolean) => void,
    removeTask: (id: number) => void,
}

const ListTasksItem: React.FC<ListTasksItemInterface> = ({id, todo, complete, onChange, removeTask}) => {

    return (
        <li key={id} className={classes.list_item}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Checkbox onChange={(e) => onChange(id, e.target.checked)} checked={complete}/>
                <p  className={classes.list_item_title}>{todo}</p>
            </div>
            <DeleteTwoTone onClick={() => removeTask(id)} className={classes.list_item_delete} />
        </li>
    );
}

export default ListTasksItem;