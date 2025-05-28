import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from  '../jwt.strategy';
import { UsersService } from 'src/users/services/users.services';
import { UserRepository } from 'src/users/mongo/repositories/user.repository';
import { UserSchema } from 'src/users/mongo/schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'SUA_CHAVE_SECRETA_AQUI', // em produção, use variável de ambiente
      signOptions: { expiresIn: '1h' },
    }),
    MongooseModule.forFeature([{name:'users', schema: UserSchema}])
  ],
  providers: [AuthService, JwtStrategy,UsersService,UserRepository],
  controllers: [AuthController],
  
})
export class AuthModule {}
