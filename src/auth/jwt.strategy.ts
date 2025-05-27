import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SUA_CHAVE_SECRETA_AQUI', // use env em produção
    });
  }

  async validate(payload: any) {
    // payload é o que foi assinado no token (ex: sub, username, role)
    return { userId: payload.sub, username: payload.username, role: payload.role };
  }
}
