import axios from "./axios.js";

const API = "http://localhost:5000/api"

//User viene del body
export const registerRequest = user => axios.post(`/register`, user) ;

export const loguinRequest = user => axios.post(`/loguin`, user) ;

export const verifyTokenRequest = () =>axios.get("/verify")