import { combineReducers } from "redux";
import ServiceReducer from "./reducer";

const rootReducer = combineReducers({
    bharpReducer: ServiceReducer,
});

export default rootReducer;