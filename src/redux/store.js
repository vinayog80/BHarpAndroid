import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";

const Store = createStore(rootReducer);
export default Store;