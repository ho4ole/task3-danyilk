import {Button} from "@mui/material";
// @ts-ignore
import React from "react";
import {connect} from "react-redux";
import {logInUser, signUpUser} from "../redux/auth-reducer";
import TableComponent from "./TableComponent";
import {deleteUser} from "../redux/users-reducer";
// @ts-ignore
function AdminPanel(props) {

    let deleteUserHandler = () => {
       props.selectedUsers.forEach(userId => {props.deleteUser(userId)})
    }

    return (<div>
           <Button onClick={deleteUserHandler}>Delete</Button>
           <TableComponent/>
    </div>)
}

const mapStateToProps = (state) => {return {isAuth: state.auth.isAuth, selectedUsers: state.users.selectedUsers}}

export default connect(mapStateToProps, {signUpUser, logInUser, deleteUser})(AdminPanel)
