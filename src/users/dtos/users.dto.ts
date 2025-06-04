import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Role } from "src/auth/roles/roles.enum";


export class UsersDto {
    
    @IsNotEmpty()
    @IsString()
    readonly nome: string;

    @IsNotEmpty()
    @IsString()
    readonly senha: string;
    
    @IsNotEmpty()
    @IsEnum(Role)
    readonly role: Role[];
}