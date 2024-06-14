import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js" ;
import tasksRoutes from "./routes/tasks.routes.js" ;
import cardsRoutes from "./routes/tasks.routes.js" ;
import cookieparser from "cookie-parser"

const app = express () ;

app.use(morgan("dev")) ;
app.use(express.json()) ;
app.use(cookieparser())

app.use("/api" , authRoutes )
app.use("/api" , tasksRoutes )
app.use("/api" , cardsRoutes )

export default app ;