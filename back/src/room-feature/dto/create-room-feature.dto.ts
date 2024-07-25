import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateRoomFeatureDto {
    @ApiProperty({
        example: 'Wifi',
        description: 'Name of the feature available at the room',
    })
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty({
        example: 'High-speed internet access',
        description: 'Description of the feature.',
    })
    @IsString()
    @IsNotEmpty()
    description: string
}
