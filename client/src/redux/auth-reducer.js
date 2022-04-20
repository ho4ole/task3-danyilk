import {loginUser, registerUser} from "../api/Api";
import axios from "axios";

const SET_AUTH = "SET_AUTH"

let initialState = {isAuth: false};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH: {return {...state, isAuth: true}}
        default: return state;
    }
}

export const setUpAuth = (data) => ({type: SET_AUTH, data})

export const signUpUser = (data) => async (dispatch) => {
    registerUser(data).then(res => {console.log(res)})
    dispatch(setUpAuth())
}

export const logInUser = (data) => async (dispatch) => {
    let response = await loginUser(data);
     if (response.user) {dispatch(setUpAuth())}
    }
export default authReducer;
