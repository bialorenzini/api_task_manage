import { error } from "console";
import { UserInterface } from "../interfaces/user";
import { createUser, findAllUsers, findUserByEmail } from "../repositories/user.repository";

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