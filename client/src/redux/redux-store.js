import { combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
   auth: authReducer
});

const store = configureStore({
    reducer: reducers
})
export default store;
