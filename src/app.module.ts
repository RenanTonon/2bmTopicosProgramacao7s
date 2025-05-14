import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TarefaSchema } from './mongo/schemas/tarefa.schema';
import { TarefasController } from './controllers/tarefas.controller';
import { TarefasServices } from './services/tarefas.services';
import { TarefasRepository } from './mongo/repositories/tarefas.repository';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/geren-tarefas'),
  MongooseModule.forFeature([{name:'tarefas', schema: TarefaSchema}])],
  controllers: [TarefasController],
  providers: [TarefasServices,TarefasRepository],
})
export class AppModule {}
