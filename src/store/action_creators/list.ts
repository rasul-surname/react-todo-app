import {ListTaskTypes} from "../../types/list";

export const fetchListTasks = () => ({type: ListTaskTypes.FETCH_LIST_TASKS});
export const fetchTasksSuccess = () => ({type: ListTaskTypes.FETCH_TASKS_SUCCESS});
export const addTaskList = (value: any) => ({type: ListTaskTypes.ADD_TASK, payload: value});
export const removeTaskList = (id: number) => ({type: ListTaskTypes.REMOVE_TASK_LIST, payload: id});
export const changeCompleteTask = (id: number, checked: boolean) => ({type: ListTaskTypes.CHANGE_COMPLETE_TASK, payload: {id, checked}});