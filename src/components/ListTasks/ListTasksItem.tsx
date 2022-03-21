import React from "react";
import { Checkbox } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import {db} from "../../firebase_config";

interface ListTasksItemInterface {
    id: any,
    todo: string,
    in_progress: boolean,
}

const ListTasksItem: React.FC<ListTasksItemInterface> = ({id,todo, in_progress}) => {
    
    function deleteItem() {
        db.collection("todos").doc(id).delete();
    }

    return (
        <div className="list_item">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Checkbox></Checkbox>
                <p  className="list_item_title">{todo}</p>
            </div>
            <DeleteTwoTone className="list_item_delete" onClick={deleteItem} />
        </div>
    );
}

export default ListTasksItem;