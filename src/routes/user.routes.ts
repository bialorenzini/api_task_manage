import { Router } from "express";
import { createUser, deleteUser, findAllUsers, updateUser } from "../controllers/user.controller";
import { validade } from "../middlewares/validate.middleware";
import { CreateUserDTO, UpdateUserDTO } from "../dto/user.dto";

const router = Router()

router.post('/',validade(CreateUserDTO) ,createUser)
router.get('/', findAllUsers)
router.put('/:id',validade(UpdateUserDTO), updateUser)
router.delete('/:id', deleteUser)

export default router