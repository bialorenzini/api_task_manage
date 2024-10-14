import { Router } from "express";
import { createUser, deleteUser, findAllUsers, updateUser } from "../controllers/user.controller";

const router = Router()

router.post('/', createUser)
router.get('/', findAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router