import { Schema } from "mongoose";


export const TarefaSchema = new Schema({
    
    id: String,

    titulo: String,

    descricao: String,
    
    status: String,
})