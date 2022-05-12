export interface ListState {
    listTasks: {id: number, todo: string, complete: boolean, minutes: string, pomodoro: number}[];
    tasksOpen: any[];
    tasksClosed: any[];
    requiredHours: number;
    requiredMinutes: number;
    spendHours: number;
    spendMinutes: number;
}

export enum ListTaskTypes {
    FETCH_LIST_TASKS = "FETCH_LIST_TASKS",
    ADD_TASK_LIST = "ADD_TASK_LIST",
    REMOVE_TASK_LIST = "REMOVE_TASK_LIST",
    CHANGE_COMPLETE_TASK = "CHANGE_COMPLETE_TASK",
    GET_REQUIRED_TIME = "GET_REQUIRED_TIME",
    GET_SPEND_TIME = "GET_SPEND_TIME",
}

interface FETCH_LIST_TASKS {
    type: ListTaskTypes.FETCH_LIST_TASKS;
}
interface ADD_TASK_LIST {
    type: ListTaskTypes.ADD_TASK_LIST;
    payload: {value: string, pomodoro: number};
}
interface REMOVE_TASK_LIST {
    type: ListTaskTypes.REMOVE_TASK_LIST;
    payload: number;
}
interface CHANGE_COMPLETE_TASK {
    type: ListTaskTypes.CHANGE_COMPLETE_TASK;
    payload: {
        id: number,
        checked: boolean,
    };
}
interface GET_REQUIRED_TIME {
    type: ListTaskTypes.GET_REQUIRED_TIME;
}
interface GET_SPEND_TIME {
    type: ListTaskTypes.GET_SPEND_TIME;
}

export type ListAction = FETCH_LIST_TASKS | ADD_TASK_LIST | REMOVE_TASK_LIST | CHANGE_COMPLETE_TASK | GET_REQUIRED_TIME | GET_SPEND_TIME;