import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TarefaDto } from "src/dtos/tarefas.dto";
import { Tarefa } from "src/mongo/interfaces/tarefa.interface";
import { TarefasServices } from "src/services/tarefas.services";
@Controller('tarefas')
export class TarefasController{
    
    constructor(
        private readonly tarefaService: TarefasServices
    ){}

    @Get()
    
    async getAllTarefas():Promise<Tarefa[]>{
        return await this.tarefaService.getAllTarefas()
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createTarefa(@Body() newTarefa:TarefaDto ):Promise<Tarefa>{
        return await this.tarefaService.createTarefa(newTarefa)
    }
}