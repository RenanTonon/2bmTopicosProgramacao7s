import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { TarefasEnum } from "src/enums/tarefas.enum";

export class TarefaDto {
    
    @IsNotEmpty()
    @IsString()
    readonly  titulo: String;

    @IsNotEmpty()
    @IsString()
    readonly descricao: String;
    
    @IsNotEmpty()
    @IsEnum(TarefasEnum)
    readonly status: TarefasEnum;
}