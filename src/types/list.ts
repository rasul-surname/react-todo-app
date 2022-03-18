export interface ListState {
    list: any[];
    loading: boolean;
    error: null | string;
}
export enum ListTaskTypes {
    LIST_TASK_SUCCESS = "LIST_TASK_SUCCESS",
    LIST_TASK_ERROR = "LIST_TASK_ERROR",
}
interface LIST_TASK_SUCCESS {
    type: ListTaskTypes.LIST_TASK_SUCCESS;
    payload: []
}
interface LIST_TASK_ERROR {
    type: ListTaskTypes.LIST_TASK_ERROR;
    payload: string;
}
export type ListAction = LIST_TASK_SUCCESS | LIST_TASK_ERROR;