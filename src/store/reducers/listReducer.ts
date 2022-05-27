import {ListAction, ListState, ListTaskTypes} from "../../types/list";
import moment from "moment";

const day1 = moment();
const day2 = moment().add(1, 'days');
const day3 = moment().add(2, 'days');

const today = day1.format('YYYY.MM.DD');
const tomorrow = day2.format('YYYY.MM.DD');
const nextTomorrow = day3.format('YYYY.MM.DD');

const initialState: ListState = {
    listTasks: [
        {id: 1, todo: 'Задача 1', complete: false, minutes: 30, pomodoro: 1, date: today, project: 'Работа'},
        {id: 2, todo: 'Задача 3', complete: false, minutes: 30, pomodoro: 1, date: tomorrow, project: 'Спорт'},
        {id: 3, todo: 'Задача 4', complete: false, minutes: 30, pomodoro: 2, date: nextTomorrow, project: 'Учёба'},
        {id: 4, todo: 'Задача 5', complete: false, minutes: 30, pomodoro: 2, date: today, project: 'Кодинг'},
    ],
    tasksOpen: [],
    tasksClosed: [],
    requiredHours: 0,
    requiredMinutes: 0,
    spendHours: 0,
    spendMinutes: 0,
    activeTask: {id: 0, todo: 'no', minutes: 0},
    projects: [
        {id: 1, value: 'Спорт'},
        {id: 2, value: 'Кодинг'},
        {id: 3, value: 'Работа'},
        {id: 4, value: 'Учёба'},
    ],
}

export const listReducer = (state = initialState, action: ListAction): ListState => {
    switch (action.type) {
        case ListTaskTypes.FETCH_LIST_TASKS:
            const sortFunction = (a:any, b:any) => {
                return a.project > b.project ? 1 : -1;
            }
            state.listTasks.sort(sortFunction);

            return {
                ...state,
                tasksOpen: [
                    ...state.listTasks.filter((elem) => {
                        if(elem.complete == false && elem.date === today) {
                            return true;
                        }
                    })
                ],
                tasksClosed: [
                    ...state.listTasks.filter((elem) => {
                        if(elem.complete == true && elem.date === today) {
                            return true;
                        }
                    })
                ]
            }
        case ListTaskTypes.ADD_TASK_LIST:
            const maxTaskId = state.listTasks.reduce((acc, elem) => {
                acc = acc <= elem.id ? elem.id + 1 : acc;
                return acc;
            }, 1);

            return {
                ...state,
                listTasks: [
                    ...state.listTasks,
                    {
                        id: maxTaskId,
                        todo: action.payload.value,
                        complete: false,
                        minutes: action.payload.pomodoro * 30,
						pomodoro: action.payload.pomodoro,
                        date: action.payload.date || today,
                        project: action.payload.project,
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
                if(elem.date === today) {
                    return acc += elem.minutes;
                }
                return acc;
            }, 0);
            return {
                ...state,
                requiredHours: Math.trunc(requiredMin/60),
                requiredMinutes: requiredMin % 60
            }
        case ListTaskTypes.GET_SPEND_TIME:
            const spendMin = state.tasksClosed.reduce((acc, elem) => {
                if(elem.date === today) {
                    return acc += elem.minutes;
                }
                return acc;
            }, 0);
            return {
                ...state,
                spendHours: Math.trunc(spendMin/60),
                spendMinutes: spendMin % 60
            }
        case ListTaskTypes.ADD_ACTIVE_TASK:
            return {
                ...state,
                activeTask: {
                    id: action.payload.id,
                    todo: action.payload.todo,
                    minutes: action.payload.minutes,
                }
            }
        default:
            return state;
    }
}