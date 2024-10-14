import { Request, Response } from "express";
import { createUserService, findAllUsersService } from "../services/user.service";
import user from "../entities/user.entity";

export const createUser = async (req: Request, res: Response) => {
    try{
        const user = await createUserService(req.body)
        return res.status(201).json(user)

    } catch (error) {
        return res.status(400).json({message : error})
    }
}

export const findAllUsers = async (req: Request, res: Response) => {
    const users = findAllUsersService()
    return res.status(200).json(users)
}

