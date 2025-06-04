import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "../services/users.services";
import { Users } from "../mongo/interfaces/user.interface";
import { UsersDto } from "../dtos/users.dto";
@Controller('users')
export class UsersController{
    
    constructor(
        private readonly userService: UsersService
    ){}

    @Get()
    async getAllUsers():Promise<Users[] | null>{
        return await this.userService.getAllUsers();
    }

    @Post()

    async createTarefa(@Body() newUsers:UsersDto ):Promise<Users>{
        return await this.userService.create(newUsers);
    }
}