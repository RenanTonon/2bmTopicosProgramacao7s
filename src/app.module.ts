import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TarefaSchema } from './tarefas/mongo/schemas/tarefa.schema';
import { TarefasController } from './tarefas/controllers/tarefas.controller';

import { AuthModule } from './auth/auth/auth.module';
import { TarefaModule } from './tarefas/tarefas.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/geren-tarefas'),AuthModule,TarefaModule],
  controllers: [TarefasController],
  providers: [],
})
export class AppModule {}
