import { IsNotEmpty, IsString } from "class-validator";

export class TarefaDto {
    
    @IsNotEmpty()
    @IsString()
    readonly  titulo: String;

    @IsNotEmpty()
    @IsString()
    readonly descricao: String;
    
    @IsNotEmpty()
    @IsString()
    readonly status: String;
}