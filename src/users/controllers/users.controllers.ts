import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "../services/users.services";
import { Users } from "../mongo/interfaces/user.interface";
import { UsersDto } from "../dtos/users.dto";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "src/auth/roles/roles.guard";
import { Roles } from "src/auth/roles/roles.decorator";
import { Role } from "src/auth/roles/roles.enum";

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('users')
export class UsersController{
    
    constructor(
        private readonly userService: UsersService
    ){}

    @Get()
    @Roles(Role.ADMIN)
    async getAllUsers():Promise<Users[] | null>{
        return await this.userService.getAllUsers();
    }

    @Post()
    async createTarefa(@Body() newUsers:UsersDto ):Promise<Users>{
        return await this.userService.create(newUsers);
    }
}