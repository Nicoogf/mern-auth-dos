import express from "express" ;
import { logout, loguin, profile, register } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = express.Router() ; 

router.post("/register" , register ) ;
router.post("/loguin" , loguin ) ;
router.post("/logout" , logout ) ;
router.get("/profile" , authRequired , profile ) ;

export default router ;