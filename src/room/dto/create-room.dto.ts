import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsArray, ArrayMinSize, IsInt } from 'class-validator';

export class CreateRoomDto {
    @ApiProperty({
        example: '101',
        description: 'Room number',
    })
    @IsNumber()
    @IsNotEmpty()
    number: number;

    @ApiProperty({
        example: '1',
        description: 'Hotel ID',
      })
    @IsInt()
    @IsNotEmpty()
    hotelId: number;

    @ApiProperty({
    example: '1',
    description: 'Room type ID',
    })
    @IsInt()
    @IsNotEmpty()
    roomTypeId: number;
}
