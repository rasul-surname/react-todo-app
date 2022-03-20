import {ListAction, ListState, ListTaskTypes} from "../../types/list";

const initialState: ListState = {
    listTasks: [],
    loading: false,
    error: null,
}

export const listReducer = (state = initialState, action: ListAction): ListState => {
    switch (action.type) {
        case ListTaskTypes.FETCH_LIST_TASKS:
            return {
                ...state,
                listTasks: [...action.payload],
            }
        case ListTaskTypes.FETCH_TASKS_SUCCESS:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ListTaskTypes.FETCH_TASKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}