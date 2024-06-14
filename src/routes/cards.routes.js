import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createCards, deleteCards, getCard, getCards, updateCards } from "../controllers/cards.controllers.js";

const router = Router( )

router.get("/cards" , authRequired,  getCards )
router.get("/cards/:id" , authRequired,  getCard )
router.post("/cards" , authRequired,  createCards )
router.delete("/cards/:id" , authRequired,  deleteCards )
router.put("/cards/:id" , authRequired,  updateCards )

export default router ;