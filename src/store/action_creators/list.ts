import {ListAction, ListTaskTypes} from "../../types/list";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchTask = () => {
    return async (dispatch: Dispatch<ListAction>) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            dispatch({type: ListTaskTypes.LIST_TASK_SUCCESS});
            dispatch({type: ListTaskTypes.ADD_TASK_LIST, payload: response.data});
        } catch (e) {
            dispatch({type: ListTaskTypes.LIST_TASK_ERROR, payload: 'Произошла ошибка'})
        }
    }
}