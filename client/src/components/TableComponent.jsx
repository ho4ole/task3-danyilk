import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
// @ts-ignore
import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {checkAllUsers, checkUser, getUsers, unCheckAllUsers, unCheckUser} from "../redux/users-reducer";
// @ts-ignore
const TableComponent = React.memo(props => {

    const [users] = useState(0);
    const prevUserstRef = useRef();
    useEffect(() => {
        props.getUsers();
        prevUserstRef.current = users;
    }, [users]);

    const handleClick = e => {
        const { id, checked } = e.target;
        if (checked) {props.checkUser(id);}
        else {props.unCheckUser(id)}
    };

    const handleAllClick = e => {
        const {checked } = e.target;
        if (checked) {props.checkAllUsers();}
        else {props.unCheckAllUsers()}
    };


    return (<div>
        <TableContainer>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <Checkbox onChange={handleAllClick} id="selectAll"></Checkbox>
                        <TableCell>User Id</TableCell>
                        <TableCell align="right">User Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Password</TableCell>
                        <TableCell align="right">Last login Time</TableCell>
                        <TableCell align="right">Register Time</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((user) => (
                        <TableRow key={user._id}>
                            <Checkbox checked={props.selectedUsers.includes(user._id)} name={user.name} onChange={handleClick} id={user._id}/>
                            <TableCell component="th" scope="row">{user._id}</TableCell>
                            <TableCell align="right">{user.name}</TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.password}</TableCell>
                           {/* <TableCell align="right">{user.password}</TableCell>*/}
                            <TableCell align="right">{user.registrTime}</TableCell>
                            <TableCell align="right">{user.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>)
})
const mapStateToProps = (state) => {return {users: state.users.users, selectedUsers: state.users.selectedUsers}}

export default connect(mapStateToProps, {getUsers, checkUser, unCheckUser, checkAllUsers, unCheckAllUsers})(React.memo(TableComponent))
