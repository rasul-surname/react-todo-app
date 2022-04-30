export interface ListState {
    listTasks: any[];
    loading: boolean;
    error: null | string;
}
export enum ListTaskTypes {
    FETCH_LIST_TASKS = "FETCH_LIST_TASKS",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
    ADD_TASK = "ADD_TASK",
    REMOVE_TASK_LIST = "REMOVE_TASK_LIST",
}
interface FETCH_LIST_TASKS {
    type: ListTaskTypes.FETCH_LIST_TASKS;
}
interface FETCH_TASKS_SUCCESS {
    type: ListTaskTypes.FETCH_TASKS_SUCCESS;
}
interface FETCH_TASKS_ERROR {
    type: ListTaskTypes.FETCH_TASKS_ERROR;
    payload: string;
}
interface ADD_TASK {
    type: ListTaskTypes.ADD_TASK;
    payload: any[];
}
interface REMOVE_TASK_LIST {
    type: ListTaskTypes.REMOVE_TASK_LIST;
    payload: number;
}

export type ListAction = FETCH_LIST_TASKS | FETCH_TASKS_SUCCESS | FETCH_TASKS_ERROR | ADD_TASK | REMOVE_TASK_LIST;