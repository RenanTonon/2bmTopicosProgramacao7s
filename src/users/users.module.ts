import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './mongo/schemas/users.schema';
import { UsersService } from './services/users.services';
import { UserRepository } from './mongo/repositories/user.repository';
import { UsersController } from './controllers/users.controllers';




@Module({
  imports: [
  MongooseModule.forFeature([{name:'users', schema: UserSchema}])
],
  controllers: [UsersController],
  providers: [UsersService,UserRepository,],
})
export class UsersModule {}
