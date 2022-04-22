import axios from "axios";
let getData = () => {
    var today = new Date();
    return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours()+' h '+today.getMinutes()+' m';
}
export async function registerUser(data) { data.status="active"; data.registrTime = getData(); const response= await axios.post("/register_user", {name: data.username, email: data.email,
    password: data.password, status: data.status, registrTime: data.registrTime, lastLoginTime: data.registrTime}); return response.data;}

export async function loginUser(data) {const response = await axios.post("login_user", {name: data.username, password: data.password}); return response.data;}

export async function makeUsersRequest() {const response = await axios.get("/users"); return response.data;}

export async function deleteUserRequest(data) {const response = await axios.post("/delete_user", {_id: data}); return response.data;}

export async function blockUserRequest(data) {const response = await axios.post("/block_user", {_id: data}); return response.data;}

export async function unBlockUserRequest(data) {const response = await axios.post("/unblock_user", {_id: data}); return response.data;}

export async function updateUserTimeRequest(data) {const response = await axios.post("/update_user", {_id: data, lastLoginTime: getData()}); return response.data;}
