export interface TimeState {
    time: {seconds: number, minutes: number}
}

export enum TimerTypes {
    NEXT_STEP_TIME = "NEXT_STEP_TIME",
    CHANGE_TIME = "CHANGE_TIME"
}

interface NEXT_STEP_TIME {
    type: TimerTypes.NEXT_STEP_TIME;
}
interface CHANGE_TIME {
    type: TimerTypes.CHANGE_TIME;
    payload: number;
}

export type TimeAction = NEXT_STEP_TIME | CHANGE_TIME;