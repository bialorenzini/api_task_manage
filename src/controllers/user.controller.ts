import { Request, Response } from "express";

import { createUserService, deleteUserService, findAllUsersService, updateUserService } from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({message : error})
    }
}

export const findAllUsers = async (req: Request, res: Response) =>  {
    const users = await findAllUsersService()
    res.status(200).json(users)
}

export const updateUser = async (req: Request, res: Response) => {
    try{
        const user = await updateUserService(Number(req.params.id), req.body)
        res.status(200).json(user)
    } catch(error){
        res.status(400).json({message : {error}})
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try{
       await deleteUserService(Number(req.params.id))
        res.status(204).send()
    } catch(error){
        res.status(400).json({message : {error}})
    }
}



