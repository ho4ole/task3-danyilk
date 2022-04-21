import {deleteUserRequest, makeUsersRequest} from "../api/Api";

const SET_USERS = "SET_USERS"
const CHECK_ALL_USERS = "CHECK_ALL_USERS"
const UNCHECK_ALL_USERS = "UNCHECK_ALL_USERS"
const CHECK_USER = "CHECK_USER"
const UNCHECK_USER = "UNCHECK_USER"

let initialState = {users: [], selectedUsers: []};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS: {
            return {...state, users: [...action.data]}
        }
        case CHECK_ALL_USERS: {
            let usersArray = []
            state.users.map(user => {
                usersArray.push(user._id)
            })
            return {...state, selectedUsers: [...usersArray]}
        }
        case CHECK_USER: {
            return {...state, selectedUsers: [...state.selectedUsers, action.data]}
        }
        case UNCHECK_USER: {
            let usersArray = [...state.selectedUsers]
            let index = state.selectedUsers.indexOf(action.data);
            usersArray.splice(index, 1);
            return {...state, selectedUsers: [...usersArray]}
        }
        case UNCHECK_ALL_USERS: {
            return {...state, selectedUsers: []}
        }
        default:
            return state;
    }
}

export const setUpUsers = (data) => ({type: SET_USERS, data})
export const setUpAllCheckedUsers = (data) => ({type: CHECK_ALL_USERS, data})
export const setUpCheckedUser = (data) => ({type: CHECK_USER, data})
export const setUpUnCheckedUser = (data) => ({type: UNCHECK_USER, data})
export const setUpUnCheckedAllUsers = (data) => ({type: UNCHECK_ALL_USERS, data})

export const getUsers = () => async (dispatch) => {
    makeUsersRequest().then(res => {
        dispatch(setUpUsers(res))
    })
}

export const checkUser = (data) => async (dispatch) => {
    dispatch(setUpCheckedUser(data));
}

export const unCheckUser = (data) => async (dispatch) => {
    dispatch(setUpUnCheckedUser(data));
}

export const checkAllUsers = () => async (dispatch) => {
    dispatch(setUpAllCheckedUsers());
}

export const unCheckAllUsers = () => async (dispatch) => {
    dispatch(setUpUnCheckedAllUsers());
}

export const deleteUser = (data) => async (dispatch) => {
    deleteUserRequest(data).then(res => {});
    makeUsersRequest().then(res => {
        dispatch(setUpUsers(res))
    })
}


export default usersReducer;
