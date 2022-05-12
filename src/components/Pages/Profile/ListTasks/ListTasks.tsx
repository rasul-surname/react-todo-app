import React, {useEffect} from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../../../../hooks/useTypedSelector";

import ListTasksItem from "./ListTasksItem/ListTasksItem";
import {
    changeCompleteTask,
    fetchListTasks,
    removeTaskList
} from "../../../../store/action_creators/list";

interface InterfaceListTasks {
    list: any[],
}

const ListTasks: React.FC<InterfaceListTasks> = ({list}) => {
    const {listTasks} = useTypedSelector(state => state.listReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListTasks());
    }, [listTasks]);

    function removeTask(id: number) {
        dispatch(removeTaskList(id));
    }

    function onChange(id: number, checked: boolean, ) {
        dispatch(changeCompleteTask(id, checked));
    }

    return (
        <ul>
            {
                list.map((elem) => (
                    <ListTasksItem 
						id={elem.id} 
						todo={elem.todo} 
						complete={elem.complete} 
						pomodoro={elem.pomodoro} 
						onChange={onChange} 
						removeTask={removeTask} 
					/>
                ))
            }
        </ul>
    )
}

export default ListTasks;