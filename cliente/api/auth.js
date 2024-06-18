import axios from "axios";

const API = "http://localhost:5000/api"

//User viene del body
export const registerRequest = user => axios.post(`${API}/register`, user) ;

export const loguinRequest = user => axios.post(`${API}/loguin`, user) ;