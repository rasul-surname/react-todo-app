import {ListTaskTypes} from "../../types/list";

// ListReducer
export const fetchListTasks = () => ({type: ListTaskTypes.FETCH_LIST_TASKS});
export const addTaskList = (value: string, pomodoro: number, project: string, date?: string) => ({type: ListTaskTypes.ADD_TASK_LIST, payload: {value, pomodoro, project, date}});
export const removeTaskList = (id: number) => ({type: ListTaskTypes.REMOVE_TASK_LIST, payload: id});
export const changeCompleteTask = (id: number, checked: boolean) => ({type: ListTaskTypes.CHANGE_COMPLETE_TASK, payload: {id, checked}});
export const getRequiredTime = () => ({type: ListTaskTypes.GET_REQUIRED_TIME});
export const getSpendTime = () => ({type: ListTaskTypes.GET_SPEND_TIME});
export const addActiveTask = (id: number, todo: string, minutes: number) => ({type: ListTaskTypes.ADD_ACTIVE_TASK, payload: {id, todo, minutes}});

