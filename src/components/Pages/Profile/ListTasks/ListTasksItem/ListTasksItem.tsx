import React from "react";
import { Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import classes from './ListTasksItem.module.css';

interface ListTasksItemInterface {
    id: number,
    todo: string,
    removeTask: (id: number) => void,
}

const ListTasksItem: React.FC<ListTasksItemInterface> = ({id, todo, removeTask}) => {

    return (
        <li key={id} className={classes.list_item}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Checkbox></Checkbox>
                <p  className={classes.list_item_title}>{todo}</p>
            </div>
            <DeleteTwoTone onClick={() => removeTask(id)} className={classes.list_item_delete} />
        </li>
    );
}

export default ListTasksItem;