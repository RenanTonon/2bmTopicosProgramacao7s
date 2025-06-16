import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { Users } from 'src/users/mongo/interfaces/user.interface';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ){}

    @Post()
    async getAcessoLogin(@Body() user:Users){
        return await this.authService.login(user);
    }
}
