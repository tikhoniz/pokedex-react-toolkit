import { Router } from "express";
// controllers
import { authSocial, setFavorite } from "../controllers/user-controller.js";

const router = Router();

router.post("/authSocial", authSocial);
router.post("/setFavorite", setFavorite);

export default router;
