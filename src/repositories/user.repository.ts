import User from "../entities/user.entity"
import { UserInterface } from "../interfaces/user"

export const createUser = async (data: UserInterface) => {
    return User.create({data})
}

export const findAllUsers = async () => {
    return User.findMany()
}

export const findUserByEmail = async(email:string) => {
    return User.findFirst({where: {email}})
}