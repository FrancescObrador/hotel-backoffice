import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"
import { PrimaryGeneratedColumn } from "typeorm"

export class CreateHotelFeatureDto {
    @ApiProperty({
        example: 'Swimming Pool',
        description: 'Name of the feature available at the hotel',
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        example: 'Enjoy our hotel refreshing swimming pool.',
        description: 'Description of the feature.',
    })
    @IsString()
    @IsNotEmpty()
    description: string
}
