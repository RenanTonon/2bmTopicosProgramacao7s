import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../users/services/users.services';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findByUsername(username);
    if (!user) throw new UnauthorizedException('Usuário não encontrado');

    const match = await bcrypt.compare(pass, user.senha);
    if (!match) throw new UnauthorizedException('Senha inválida');

    const { senha, ...result } = user.toObject();
    return result;
  }

  async login(user: any) {
    const payload = { username: user.nome, sub: user._id, roles: user.role };
    return { access_token: this.jwtService.sign(payload) };
  }
}
