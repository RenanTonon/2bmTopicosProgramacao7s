import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { TarefaDto } from "src/tarefas/dtos/tarefas.dto";
import { Tarefa } from "src/tarefas/mongo/interfaces/tarefa.interface";
import { TarefasServices } from "src/tarefas/services/tarefas.services";
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