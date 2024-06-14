import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js" ;
import cookieparser from "cookie-parser"

const app = express () ;

app.use(morgan("dev")) ;
app.use(express.json()) ;
app.use(cookieparser())

app.use("/api" , authRoutes )



export default app ;