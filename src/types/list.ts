export interface ListState {
    list: any[];
    loading: boolean;
    error: null | string;
}
export enum ListTaskTypes {
    ADD_TASK_LIST = "ADD_TASK_LIST",
    LIST_TASK_SUCCESS = "LIST_TASK_SUCCESS",
    LIST_TASK_ERROR = "LIST_TASK_ERROR",
}
interface ADD_TASK_LIST {
    type: ListTaskTypes.ADD_TASK_LIST;
    payload: [];
}
interface LIST_TASK_SUCCESS {
    type: ListTaskTypes.LIST_TASK_SUCCESS;
}
interface LIST_TASK_ERROR {
    type: ListTaskTypes.LIST_TASK_ERROR;
    payload: string;
}
export type ListAction = ADD_TASK_LIST | LIST_TASK_SUCCESS | LIST_TASK_ERROR;