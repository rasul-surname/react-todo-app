import {ListAction, ListState, ListTaskTypes} from "../../types/list";

const initialState: ListState = {
    listTasks: [
        {id: 1, todo: 'Задача 1', complete: false, minutes: '25'},
        {id: 2, todo: 'Задача 2', complete: true, minutes: '25'},
        {id: 3, todo: 'Задача 3', complete: false, minutes: '25'},
        {id: 4, todo: 'Задача 4', complete: false, minutes: '25'},
    ],
    tasksOpen: [],
    tasksClosed: [],
    requiredHours: 0,
    requiredMinutes: 0,
    spendHours: 0,
    spendMinutes: 0,
}

export const listReducer = (state = initialState, action: ListAction): ListState => {
    switch (action.type) {
        case ListTaskTypes.FETCH_LIST_TASKS:
            return {
                ...state,
                tasksOpen: [
                    ...state.listTasks.filter((elem) => {
                        return elem.complete == false;
                    })
                ],
                tasksClosed: [
                    ...state.listTasks.filter((elem) => {
                        return elem.complete == true;
                    })
                ]
            }
        case ListTaskTypes.ADD_TASK_LIST:
            return {
                ...state,
                listTasks: [
                    ...state.listTasks,
                    {
                        id: state.listTasks.length ? state.listTasks[state.listTasks.length - 1].id + 1 : 1,
                        todo: action.payload,
                        complete: false,
                        minutes: '25',
                    }]
            }
        case ListTaskTypes.REMOVE_TASK_LIST:
            return {
                ...state,
                listTasks: [
                    ...state.listTasks.filter(elem => elem.id !== action.payload)
                ]
            }
        case ListTaskTypes.CHANGE_COMPLETE_TASK:
            return {
                ...state,
                listTasks: [
                    ...state.listTasks.map((elem) => {
                        if(elem.id == action.payload.id) {
                            elem.complete = action.payload.checked;
                        }
                        return elem;
                    })
                ]
            }
        case ListTaskTypes.GET_REQUIRED_TIME:
            const requiredMin = state.listTasks.reduce((acc, elem) => {
                return acc += +elem.minutes;
            }, 0);
            return {
                ...state,
                requiredHours: Math.trunc(requiredMin/60),
                requiredMinutes: requiredMin % 60
            }
        case ListTaskTypes.GET_SPEND_TIME:
            const spendMin = state.tasksClosed.reduce((acc, elem) => {
                return acc += +elem.minutes;
            }, 0);
            return {
                ...state,
                spendHours: Math.trunc(spendMin/60),
                spendMinutes: spendMin % 60
            }
        default:
            return state;
    }
}