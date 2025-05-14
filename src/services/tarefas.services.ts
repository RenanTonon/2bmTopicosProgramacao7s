import { BadRequestException, Injectable } from "@nestjs/common";
import { TarefaDto } from "src/dtos/tarefas.dto";
import { Tarefa } from "src/mongo/interfaces/tarefa.interface";
import { TarefasRepository } from "src/mongo/repositories/tarefas.repository";

@Injectable()
export class TarefasServices{
    constructor(
        private readonly tarefaRepository: TarefasRepository
    ){}

    async getAllTarefas():Promise<Tarefa[]>{
        return await this.tarefaRepository.getAllTarefas()
    }

    async createTarefa(newTarefa:TarefaDto): Promise<Tarefa>{
        try {
            return await this.tarefaRepository.createTarefa(newTarefa)
        } catch (error) {
            throw new BadRequestException('Não foi possivel criar a tarefa')
        }
        
    }
}