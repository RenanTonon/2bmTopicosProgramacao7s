import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserRepository } from 'src/users/mongo/repositories/user.repository';
import { Users } from 'src/users/mongo/interfaces/user.interface';
import { Role } from 'src/auth/roles/roles.enum';
import { UsersDto } from '../dtos/users.dto';

@Injectable()
export class UsersService {
  constructor( private userRespository: UserRepository) {}

  async create(usersDto: UsersDto) {


    const hash = await bcrypt.hash(usersDto.senha, 10);
    return this.userRespository.create(usersDto.nome,hash,usersDto.role);
  }

  async findByUsername(nome: string): Promise<Users | null> {
    return this.userRespository.findByUsername(nome);
  }

  async getAllUsers(): Promise<Users[] | null> {
    return this.userRespository.getAllUsers();
  }
}
