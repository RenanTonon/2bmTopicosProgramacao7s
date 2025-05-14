import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Tarefa } from "../interfaces/tarefa.interface";
import { TarefaDto } from "src/dtos/tarefas.dto";

@Injectable()
export class TarefasRepository {
    constructor(
        @InjectModel('tarefas') readonly tarefaModel: Model<Tarefa>
    ){}

    async getAllTarefas():Promise<Tarefa[]>{
        return await this.tarefaModel.find({},{_v:false})
    }

    async createTarefa(newTarefa:TarefaDto):Promise<Tarefa>{
        const newTarefaCriada =  await new  this.tarefaModel(newTarefa)
        return newTarefaCriada.save()
    }
}