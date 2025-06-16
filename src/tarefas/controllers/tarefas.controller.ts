import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtStrategy } from "src/auth/jwt.strategy";
import { Roles } from "src/auth/roles/roles.decorator";
import { Role } from "src/auth/roles/roles.enum";
import { RolesGuard } from "src/auth/roles/roles.guard";
import { TarefaDto } from "src/tarefas/dtos/tarefas.dto";
import { Tarefa } from "src/tarefas/mongo/interfaces/tarefa.interface";
import { TarefasServices } from "src/tarefas/services/tarefas.services";

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('tarefas')
export class TarefasController{
    
    constructor(
        private readonly tarefaService: TarefasServices
    ){}
    
    @Get()
    @Roles(Role.ADMIN)
    async getAllTarefas():Promise<Tarefa[]>{
        return await this.tarefaService.getAllTarefas()
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createTarefa(@Body() newTarefa:TarefaDto ):Promise<Tarefa>{
        return await this.tarefaService.createTarefa(newTarefa)
    }
}