import {ListTaskTypes} from "../../types/list";

export const fetchListTasks = () => ({type: ListTaskTypes.FETCH_LIST_TASKS});
export const fetchTasksSuccess = () => ({type: ListTaskTypes.FETCH_TASKS_SUCCESS});
export const addTaskList = (value: any) => ({type: ListTaskTypes.ADD_TASK, payload: value});