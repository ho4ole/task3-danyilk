import {Button} from "@mui/material";
// @ts-ignore
import React from "react";
import {connect} from "react-redux";
import {logInUser, signUpUser} from "../redux/auth-reducer";
// @ts-ignore
function AuthHandler(props) {
    return (<div>
           <h1>Admin Panel</h1>
    </div>)
}

const mapStateToProps = (state) => {return {isAuth: state.auth.isAuth}}

export default connect(mapStateToProps, {signUpUser, logInUser})(AuthHandler)
