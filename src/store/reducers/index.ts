import {combineReducers} from "redux";
import {listReducer} from "./listReducer";

export const rootReducer = combineReducers({
    listReducer: listReducer,
})

export type RootState = ReturnType<typeof rootReducer>