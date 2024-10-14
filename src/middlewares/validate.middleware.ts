import { plainToInstance } from "class-transformer"
import { NextFunction, Request, Response } from "express"
import {validate as classValidatorValidate} from "class-validator"

export const validade = (dto: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const data = plainToInstance(dto, req.body)
        const errors = await classValidatorValidate

        if(errors.length > 0){
            res.status(400).json({message: 'Dados inválidos', errors})
        }

        req.body = data
        next()
    }
}