import React from "react";
import { Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import classes from './ListTasksItem.module.css';

interface ListTasksItemInterface {
    todo: string,
}

const ListTasksItem: React.FC<ListTasksItemInterface> = ({todo}) => {

    return (
        <div className={classes.list_item}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Checkbox></Checkbox>
                <p  className={classes.list_item_title}>{todo}</p>
            </div>
            <DeleteTwoTone className={classes.list_item_delete} />
        </div>
    );
}

export default ListTasksItem;