import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, IsArray, ArrayMinSize } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateHotelDto {

    @ApiProperty({
        example: 'Hotel Nirvana',
        description: 'Hotel name',
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        example: '123 Main Street',
        description: 'Hotel address',
    })
    @IsString()
    @IsNotEmpty()
    address: string

    @ApiProperty({
        example: '+34 123 456 789',
        description: 'Hotel phone number',
    })
    @IsString()
    @IsNotEmpty()
    phone: string

    @ApiProperty({
        example: 'nirvana@hotel.com',
        description: 'Hotel email',
    })
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty({
        example: 5,
        description: 'Hotel stars',
        minimum: 1,
        maximum: 5,
    })
    @IsNumber()
    @Min(1)
    @Max(5)
    stars: number

    @ApiProperty({
        type: [Number],
        example: [1, 2, 3],
        description: 'List of feature IDs',
        required: false,
    })
    @IsOptional()
    @IsArray()
    @ArrayMinSize(1)
    features?: number[]
}
