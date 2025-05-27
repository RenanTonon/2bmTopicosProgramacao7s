import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserRepository } from 'src/mongo/repositories/user.repository';
import { Users } from 'src/mongo/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor( private userRespository: UserRepository) {}

  async create(nome: string, senha: string, role: string = 'user') {
    const hash = await bcrypt.hash(senha, 10);
    return this.userRespository.create(nome,hash,role);
  }

  async findByUsername(nome: string): Promise<Users | null> {
    return this.userRespository.findByUsername(nome);
  }
}
