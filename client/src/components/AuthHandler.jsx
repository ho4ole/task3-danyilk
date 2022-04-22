import {Button, styled} from "@mui/material";
// @ts-ignore
import React, {useEffect, useRef, useState} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

import {connect} from "react-redux";
import {changeAuth, logInUser, signUpUser} from "../redux/auth-reducer";
import SignUp from "./SignUp.tsx";
import LogIn from "./LogIn.tsx";
import AdminPanel from "./AdminPanel";

const CustomButton = styled(Button)(({ theme }) => ({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    padding: "1px 30px",
    margin: "5px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
}));

// @ts-ignore
const AuthHandler = (props) => {
    useEffect(() => {
    }, [props.isAuth]);
    return (<div>
        { props.isAuth ? <AdminPanel/> : <Router><CustomButton><Link style={{ textDecoration: 'none' }} to="/login">Log In</Link></CustomButton><CustomButton><Link style={{ textDecoration: 'none' }} to="/signup">Sign Up</Link>
        </CustomButton><Routes><Route path="/signup" element={<SignUp signUpFunction={props.signUpUser}/>}/>
            <Route path="/login" element={<LogIn logInFunction={props.logInUser}/>}/></Routes>
        </Router>}
    </div>)
}

const mapStateToProps = (state) => {return {isAuth: state.auth.isAuth}}

export default connect(mapStateToProps, {signUpUser, logInUser, changeAuth})(AuthHandler)
