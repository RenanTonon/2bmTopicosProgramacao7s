import { Schema } from "mongoose";


export const TarefaSchema = new Schema({
    
    titulo: String,

    descricao: String,
    
    status: String,
})