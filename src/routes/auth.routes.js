import express from "express";
import { logout, loguin, profile, register, verifyToken } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loguinSchema, registerSchema } from "../schema/auth.schema.js";

const router = express.Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/loguin", validateSchema(loguinSchema), loguin);
router.get("/verify" , verifyToken)
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;