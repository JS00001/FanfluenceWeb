import themeSwitchReducer from "../reducers/themeSwitchReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  theme: themeSwitchReducer
});

export default createStore(rootReducer);