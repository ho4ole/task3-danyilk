import './App.css';
// @ts-ignore
import React from "react";
// @ts-ignore
import SignUp from "./components/SignUp.tsx";
import {Provider} from "react-redux";
// @ts-ignore
import {signUpUser} from "./redux/auth-reducer";
// @ts-ignore
import store from './redux/redux-store.js'
// @ts-ignore
import AuthHandler from './components/AuthHandler'

function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <h1>Welcome to the TASK 3</h1>
             <AuthHandler/>
        </div>
        </Provider>
    );
}

export default App

