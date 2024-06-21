import axios from "./axios.js";

//User viene del body
export const registerRequest = user => axios.post(`/register`, user) ;

export const loguinRequest = user => axios.post(`/loguin`, user) ;

export const verifyTokenRequest = () => axios.get("/verify")

