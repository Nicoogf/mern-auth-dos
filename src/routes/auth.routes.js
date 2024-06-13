import express from "express" ;
import { loguin, register } from "../controllers/auth.controller.js";

const router = express.Router() ; 

router.post("/register" , register ) ;
router.post("/loguin" , loguin ) ;

export default router ;