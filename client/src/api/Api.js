import axios from "axios";

export async function registerUser(data) {axios.post("/register_user", {name: data.username, email: data.email, password: data.password}).then(res => {return res})}

export async function loginUser(data) {const response = await axios.post("login_user", {name: data.username, password: data.password}); return response.data;}
