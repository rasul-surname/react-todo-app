export interface ListState {
    listTasks: any[];
    tasksOpen: any[];
    tasksClosed: any[];
}

export enum ListTaskTypes {
    FETCH_LIST_TASKS = "FETCH_LIST_TASKS",
    ADD_TASK_LIST = "ADD_TASK_LIST",
    REMOVE_TASK_LIST = "REMOVE_TASK_LIST",
    CHANGE_COMPLETE_TASK = "CHANGE_COMPLETE_TASK"
}

interface FETCH_LIST_TASKS {
    type: ListTaskTypes.FETCH_LIST_TASKS;
}
interface ADD_TASK_LIST {
    type: ListTaskTypes.ADD_TASK_LIST;
    payload: string;
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

export type ListAction = FETCH_LIST_TASKS | ADD_TASK_LIST | REMOVE_TASK_LIST | CHANGE_COMPLETE_TASK;