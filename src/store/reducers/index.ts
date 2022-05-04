import {combineReducers} from "redux";
import {listReducer} from "./listReducer";
import {timeReducer} from "./timeReducer";

export const rootReducer = combineReducers({
    listReducer: listReducer,
    timeReducer: timeReducer,
})

export type RootState = ReturnType<typeof rootReducer>