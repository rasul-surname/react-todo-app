import {ListAction, ListState, ListTaskTypes} from "../../types/list";

const initialState: ListState = {
    list: [],
    loading: false,
    error: null,
}

export const listReducer = (state = initialState, action: ListAction): ListState => {
    switch (action.type) {
        case ListTaskTypes.ADD_TASK_LIST:
            return {
                ...state,
                list: [...state.list, action.payload],
            }
        case ListTaskTypes.LIST_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            }
        case ListTaskTypes.LIST_TASK_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}