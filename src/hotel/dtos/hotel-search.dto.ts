import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsDate, IsDateString, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator"

// Refactor to a HotelSearchDto and a RoomSearchDto

export class HotelSearchDto{
    
    @ApiProperty({
        description: 'Name of the hotel'
    })
    @IsOptional()
    @IsString()
    @Type(() => String)
    name?: string

    @ApiProperty({
        description: 'Where is located'
    })
    @IsOptional()
    @IsString()
    @Type(() => String)
    address?: string

    @IsOptional()
    @IsDateString()
    checkInDate?: string

    @IsOptional()
    @IsDateString()
    checkOutDate?: string

    @IsOptional()
    @IsNumber()
    @Min(1)
    numberOfPeople: number

    @ApiProperty({
        default: 10,
        description: 'How many rows do you need'
    })
    @IsOptional()
    @IsPositive()
    @Type(() => Number)
    limit?: number
}