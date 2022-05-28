import {ListAction, ListState, ListTaskTypes} from "../../types/list";
import moment from "moment";

// Полный формат даты
const dayMinus_2 = moment().add(-2, 'days');
const dayMinus_1 = moment().add(-1, 'days');
const today = moment();
const dayPlus_1 = moment().add(1, 'days');
const dayPlus_2 = moment().add(2, 'days');

// Год месяч цисло
const todayMinus_2 = dayMinus_2.format('YYYY.MM.DD');
const todayMinus_1 = dayMinus_1.format('YYYY.MM.DD');
const todayDate = today.format('YYYY.MM.DD');
const todayPlus_1 = dayPlus_1.format('YYYY.MM.DD');
const todayPlus_2 = dayPlus_2.format('YYYY.MM.DD');

// День недели
const dayWeekMinus_2 = dayMinus_2.format('dddd');
const dayWeekMinus_1 = dayMinus_1.format('dddd');
const todayDayWeek = today.format('dddd');
const dayWeekPlus_1 = dayPlus_1.format('dddd');
const dayWeekPlus_2 = dayPlus_2.format('dddd');

const initialState: ListState = {
    listTasks: [
        {id: 1, todo: 'sp: task-20', complete: false, minutes: 30, pomodoro: 1, date: todayDate, dayWeek: todayDayWeek, project: 'Кодинг'},
        {id: 2, todo: 'sp: task-21', complete: false, minutes: 30, pomodoro: 1, date: todayDate, dayWeek: todayDayWeek, project: 'Кодинг'},
        {id: 3, todo: 'work: task-14000', complete: false, minutes: 30, pomodoro: 1, date: todayDate, dayWeek: todayDayWeek, project: 'Работа'},
        {id: 4, todo: 'футбол', complete: false, minutes: 30, pomodoro: 1, date: todayDate, dayWeek: todayDayWeek, project: 'Спорт'},

        {id: 5, todo: 'Задача 1', complete: false, minutes: 30, pomodoro: 1, date: todayMinus_1, dayWeek: dayWeekMinus_1, project: 'Спорт'},
        {id: 6, todo: 'Задача 2', complete: false, minutes: 30, pomodoro: 2, date: todayMinus_2, dayWeek: dayWeekMinus_2, project: 'Учёба'},

        {id: 7, todo: 'Задача 3', complete: false, minutes: 30, pomodoro: 1, date: todayPlus_1, dayWeek: dayWeekPlus_1, project: 'Спорт'},
        {id: 8, todo: 'Задача 4', complete: false, minutes: 30, pomodoro: 2, date: todayPlus_2, dayWeek: dayWeekPlus_2, project: 'Учёба'},
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
            // todo: костыль - временное решение, нужно подумать как изменить структуру
            const sortFunction = (a:any, b:any) => {
                return a.project > b.project ? 1 : -1;
            }
            state.listTasks.sort(sortFunction);

            return {
                ...state,
                tasksOpen: [
                    ...state.listTasks.filter((elem) => {
                        if(elem.complete == false && elem.date === todayDate) {
                            return true;
                        }
                    })
                ],
                tasksClosed: [
                    ...state.listTasks.filter((elem) => {
                        if(elem.complete == true && elem.date === todayDate) {
                            return true;
                        }
                    })
                ]
            }
        case ListTaskTypes.ADD_TASK_LIST:
            // todo: костыль - временное решение
            const maxTaskId = state.listTasks.reduce((acc, elem) => {
                acc = acc <= elem.id ? elem.id + 1 : acc;
                return acc;
            }, 1);

            const getDayWeek = (data: string) => {
                let arr = data.split('.');

                // отнимаю 1 месяц т.к. moment.js ведет отсчет с нулевого месяца
                arr[1] = String(+arr[1] - 1);

                return moment(arr).format('dddd');
            }

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
                        date: action.payload.date || todayDate,
                        dayWeek: getDayWeek(action.payload.date || todayDate),
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
            // todo: костыль - временное решение
            const requiredMin = state.listTasks.reduce((acc, elem) => {
                if(elem.date === todayDate) {
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
            // todo: костыль - временное решение
            const spendMin = state.tasksClosed.reduce((acc, elem) => {
                if(elem.date === todayDate) {
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