import {ListAction, ListState, ListTaskTypes} from "../../types/list";

const initialState: ListState = {
    listTasks: [
        {id: 1, todo: 'Задача 1'},
        {id: 2, todo: 'Задача 2'},
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
                listTasks: [
                    ...state.listTasks,
                    {
                        id: state.listTasks[state.listTasks.length - 1].id + 1,
                        todo: action.payload
                    }],
            }
        case ListTaskTypes.REMOVE_TASK_LIST:
            return {
                ...state,
                listTasks: [
                    ...state.listTasks.filter(elem => elem.id !== action.payload)
                ]
            }
        default:
            return state;
    }
}