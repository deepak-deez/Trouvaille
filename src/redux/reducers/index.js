import {combineReducers} from "redux";
import { logInReducer } from "./userReducer";

const rootReducer = combineReducers(
    {
        logInReducer : logInReducer
    }
)

export default rootReducer;