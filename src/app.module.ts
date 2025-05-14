import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TarefaSchema } from './mongo/schemas/tarefa.schema';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/geren-tarefas'),
  MongooseModule.forFeature([{name:'user', schema: TarefaSchema}])],
  controllers: [],
  providers: [],
})
export class AppModule {}
