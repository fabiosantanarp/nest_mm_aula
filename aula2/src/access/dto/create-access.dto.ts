import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {} from 'class-transformer';

export class CreateAccessDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNumber()
    age: number;
}
