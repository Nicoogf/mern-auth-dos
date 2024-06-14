import { Router } from "express";
import { authRequired } from "../middlewares/validateToken";
import { createCards, deleteCards, getCard, getCards, updateCards } from "../controllers/cards.controllers.js";

const router = Router( )

router.get("/cards" , authRequired,  getCards )
router.get("/cards/:id" , authRequired,  getCard )
router.post("/card" , authRequired,  createCards )
router.delete("/card/:id" , authRequired,  deleteCards )
router.put("/card/id" , authRequired,  updateCards )

export default router ;