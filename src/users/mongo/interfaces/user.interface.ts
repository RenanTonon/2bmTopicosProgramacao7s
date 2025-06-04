import * as mongoose from "mongoose";
import { Document } from "mongoose";
import { Role } from "src/auth/roles/roles.enum";

export interface Users extends Document{
    
    readonly _id:mongoose.Schema.Types.ObjectId,
    
    readonly nome: string,

    readonly senha: string,
    
    readonly role: Role[],
}