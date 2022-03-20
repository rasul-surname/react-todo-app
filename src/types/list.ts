export interface ListState {
    listTasks: any[];
    loading: boolean;
    error: null | string;
}
export enum ListTaskTypes {
    FETCH_LIST_TASKS = "FETCH_LIST_TASKS",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
}
interface FETCH_LIST_TASKS {
    type: ListTaskTypes.FETCH_LIST_TASKS;
    payload: any[];
}
interface FETCH_TASKS_SUCCESS {
    type: ListTaskTypes.FETCH_TASKS_SUCCESS;
}
interface FETCH_TASKS_ERROR {
    type: ListTaskTypes.FETCH_TASKS_ERROR;
    payload: string;
}
export type ListAction = FETCH_LIST_TASKS | FETCH_TASKS_SUCCESS | FETCH_TASKS_ERROR;