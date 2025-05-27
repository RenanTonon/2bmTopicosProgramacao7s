import { Schema } from "mongoose";
import { Role } from "src/roles/roles.enum";


export const UserSchema = new Schema({
    
    nome: {type: String,required: true,},

    senha: {type: String,required: true,},
    
    role: {type: String,enum: Object.values(Role), default: Role.USER,required: true,},
})
