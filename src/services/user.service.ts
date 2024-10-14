import { error } from "console";
import { UserInterface } from "../interfaces/user";
import { createUser, deleteUser, findAllUsers, findUserByEmail, findUserById, updateUser } from "../repositories/user.repository";

export const createUserService = async (data : UserInterface) => {
    const user = await findUserByEmail(data.email)
    
    if(user){
        throw new Error('Usuário já existe')
    }

    return createUser(data)
}

export const findAllUsersService = async() => {
    return findAllUsers()
}

export const findUserByEmailService = async (email : string) => {
    return findUserByEmail(email)
}

export const findUserByIdService = async (id:number) => {
    return findUserById(id)
}

export const updateUserService = async(id:number, data: UserInterface) => {
    const user = findUserById(id)

    if(!user){
        throw new Error('Usuário não encontrado')
    }

    return updateUser(id, data)
}

export const deleteUserService = async (id:number) => {
    const user = findUserById(id)

    if(!user){
        throw new Error('Usuário não encontrado')
    } 
    
    return deleteUser(id)
}