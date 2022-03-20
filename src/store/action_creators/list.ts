import {ListAction, ListTaskTypes} from "../../types/list";
import {Dispatch} from "redux";
import {db} from "../../firebase_config";

export const fetchTasks = () => {
    return async (dispatch: Dispatch<ListAction>) => {
        try {
            await db.collection("todos").onSnapshot(function (querySnapshot: any) {
                dispatch({type: ListTaskTypes.FETCH_TASKS_SUCCESS});
                const response = querySnapshot.docs.map((doc:any) => ({
                    todo: doc.data().todo,
                }))

                dispatch({type: ListTaskTypes.FETCH_LIST_TASKS, payload: response});
            })
        } catch (e) {
            console.log('Произошла ошибка');
            dispatch({type: ListTaskTypes.FETCH_TASKS_ERROR, payload: 'Произошла ошибка'})
        }
    }
}

export const addTaskList = (value: string) => {
    return async () => {
        try {
            await db.collection("todos").add({
                todo: value,
            });
        } catch (e) {
            console.log('Задача не загрузилась');
        }
    }
}