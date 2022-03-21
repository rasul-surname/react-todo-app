import React from "react";
import { Checkbox } from "antd";
import {db} from "../../../firebase_config";
import { DeleteTwoTone } from "@ant-design/icons";
import classes from './ListTasksItem.module.css';

interface ListTasksItemInterface {
    id: string,
    todo: string,
    in_progress: boolean,
}

const ListTasksItem: React.FC<ListTasksItemInterface> = ({id,todo, in_progress}) => {
    
    function deleteItem() {
        db.collection("todos").doc(id).delete();
    }

    return (
        <div className={classes.list_item}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Checkbox></Checkbox>
                <p  className={classes.list_item_title}>{todo}</p>
            </div>
            <DeleteTwoTone className={classes.list_item_delete} onClick={deleteItem} />
        </div>
    );
}

export default ListTasksItem;