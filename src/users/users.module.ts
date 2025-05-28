import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './mongo/schemas/users.schema';
import { UsersService } from './services/users.services';
import { UserRepository } from './mongo/repositories/user.repository';




@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/geren-tarefas'),],
  controllers: [],
  providers: [UsersService,UserRepository,],
})
export class UsersModule {}
