import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';

export class CreateAccessDto {
  @ApiProperty({
    type: String,
    description: 'Nome do usuario',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    type: Number,
    description: 'Idade do usuario',
  })
  @IsNumber()
  @Optional()
  age: number;
}
