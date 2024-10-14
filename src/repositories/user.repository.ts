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

export const findUserById = async (id:number) => {
    return User.findFirst({where:{id}})
}

export const updateUser = async (id:number,data: UserInterface) => {
    return User.update({where:{id}, data})
}

export const deleteUser = async (id:number) => {
    return User.delete({where:{id}})
}
