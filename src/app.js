import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js" ;
import tasksRoutes from "./routes/tasks.routes.js" ;
import cardsRoutes from "./routes/cards.routes.js" ;
import cookieparser from "cookie-parser"
import cors from "cors"

const app = express () ;

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(morgan("dev")) ;
app.use(express.json()) ;
app.use(cookieparser())

app.use("/api" , authRoutes )
app.use("/api" , tasksRoutes )
app.use("/api" , cardsRoutes )

export default app ;