import { Request, Response } from "express";

import { createUserService, findAllUsersService } from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = createUserService(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({message : error})
    }
}

export const findAllUsers = async (req: Request, res: Response) =>  {
    const users = findAllUsersService()
    res.status(200).json(users)
}

