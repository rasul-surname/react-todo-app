import {ListAction, ListState, ListTaskTypes} from "../../types/list";

const initialState: ListState = {
    listTasks: [
        {todo: 'Задача 1'},
        {todo: 'Задача 2'},
    ],
    loading: false,
    error: null,
}

export const listReducer = (state = initialState, action: ListAction): ListState => {
    switch (action.type) {
        case ListTaskTypes.FETCH_LIST_TASKS:
            return {
                ...state,
                loading: true,
            }
        case ListTaskTypes.FETCH_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case ListTaskTypes.FETCH_TASKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ListTaskTypes.ADD_TASK:
            return {
                ...state,
                listTasks: [...state.listTasks, {todo: action.payload}],
            }
        default:
            return state;
    }
}