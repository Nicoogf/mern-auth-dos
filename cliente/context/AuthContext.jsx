"use client"

import { createContext, useState, useContext , useEffect } from "react";
import { loguinRequest, registerRequest } from "@/api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth tiene que estar dentro de AuthProvider ")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [ errors , setErrors ] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data)
        }
    }

    const signin = async( user ) => {
        try {
            const res = await loguinRequest(user)
            console.log(res)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
            setErrors(error.response.data)
        }
    }

    useEffect(() => {
        if(errors.length > 0 ){
            const timer = setTimeout( ()=>{
                setErrors([])       
    },3000) 
    return () => clearTimeout(timer)     
    }
   }, [errors])

   useEffect( () => {
    
   } , [] )

    return (
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            errors,
            signin
        }}>
            {children}
        </AuthContext.Provider>
    )
} 