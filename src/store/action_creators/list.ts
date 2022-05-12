import {ListTaskTypes} from "../../types/list";
import {TimerTypes} from "../../types/time";

// ListReducer
export const fetchListTasks = () => ({type: ListTaskTypes.FETCH_LIST_TASKS});
export const addTaskList = (value: string, pomodoro: number) => ({type: ListTaskTypes.ADD_TASK_LIST, payload: {value, pomodoro}});
export const removeTaskList = (id: number) => ({type: ListTaskTypes.REMOVE_TASK_LIST, payload: id});
export const changeCompleteTask = (id: number, checked: boolean) => ({type: ListTaskTypes.CHANGE_COMPLETE_TASK, payload: {id, checked}});
export const getRequiredTime = () => ({type: ListTaskTypes.GET_REQUIRED_TIME});
export const getSpendTime = () => ({type: ListTaskTypes.GET_SPEND_TIME});

// TimeReducer
export const nextStepTime = () => ({type: TimerTypes.NEXT_STEP_TIME});
export const changeTime = (minutes: number) => ({type: TimerTypes.CHANGE_TIME, payload: minutes});