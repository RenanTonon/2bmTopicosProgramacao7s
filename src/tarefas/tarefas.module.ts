import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TarefasController } from './controllers/tarefas.controller';
import { TarefasServices } from './services/tarefas.services';
import { TarefasRepository } from './mongo/respositories/tarefas.repository';
import { TarefaSchema } from './mongo/schemas/tarefa.schema';




@Module({
  imports: [
  MongooseModule.forFeature([{name:'tarefas', schema: TarefaSchema}])],
  controllers: [TarefasController],
  providers: [TarefasServices,TarefasRepository,],
})
export class TarefaModule {}
