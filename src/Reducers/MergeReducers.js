import { combineReducers } from "redux";
import TraineesData from "./TraineesDataReducer";

const allReducers = combineReducers({
    traineesData : TraineesData
})

export default allReducers;