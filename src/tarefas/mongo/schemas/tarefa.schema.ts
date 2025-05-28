import { Schema } from "mongoose";


export const TarefaSchema = new Schema({
    
    titulo: {type: String,required: true},

    descricao:{type: String,required: true},
    
    status: {type: String,required: true},
})