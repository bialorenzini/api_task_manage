import { Router } from "express";
import { createUser, findAllUsers } from "../controllers/user.controller";

const router = Router()

router.post('/', createUser)
router.get('/', findAllUsers)

export default router