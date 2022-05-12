import {TimeAction, TimerTypes, TimeState} from "../../types/time";

const initialState: TimeState = {
    time: {seconds: 0, minutes: 25}
}

export const timeReducer = (state = initialState, action: TimeAction) => {
    switch (action.type) {
        case TimerTypes.NEXT_STEP_TIME:
            if(state.time.seconds === 0) {
                return {...state, time: {seconds: 59, minutes: state.time.minutes - 1}}
            } else {
                return {...state, time: {seconds: state.time.seconds - 1, minutes: state.time.minutes}}
            }
        case TimerTypes.CHANGE_TIME:
            return {
                ...state,
                time: {seconds: 0, minutes: action.payload}
            }
        default:
            return state;
    }
}