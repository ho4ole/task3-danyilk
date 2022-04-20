import {Button} from "@mui/material";
// @ts-ignore
import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import {connect} from "react-redux";
import {logInUser, signUpUser} from "../redux/auth-reducer";
import SignUp from "./SignUp.tsx";
import LogIn from "./LogIn.tsx";
import AdminPanel from "./AdminPanel";

// @ts-ignore
function AuthHandler(props) {
    let isAuth = props.isAuth;
    return (<div>
        { isAuth === true ? <AdminPanel/> : <Router><Button><Link to="/login">Log In</Link></Button><Button><Link to="/signup">Sign Up</Link>
        </Button><Routes><Route path="/signup" element={<SignUp signUpFunction={props.signUpUser}/>}/>
            <Route path="/login" element={<LogIn logInFunction={props.logInUser}/>}/></Routes>
        </Router>}
    </div>)
}

const mapStateToProps = (state) => {return {isAuth: state.auth.isAuth}}

export default connect(mapStateToProps, {signUpUser, logInUser})(AuthHandler)
