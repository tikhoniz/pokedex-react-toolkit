import { Router } from "express";

import { getPokemonsByQuery } from "../controllers/pokemon-controller.js";

const router = Router();

router.get("/:query", getPokemonsByQuery);

export default router;
