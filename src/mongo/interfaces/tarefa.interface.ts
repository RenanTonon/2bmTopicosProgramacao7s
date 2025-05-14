import * as mongoose from "mongoose";
import { Document } from "mongoose";

export interface Tarefa extends Document{
    
    readonly _id:mongoose.Schema.Types.ObjectId,
    
    readonly  titulo: String,

    readonly descricao: String,
    
    readonly status: String,
}