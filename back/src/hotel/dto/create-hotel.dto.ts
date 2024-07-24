import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

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
}
