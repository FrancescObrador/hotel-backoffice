import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty } from "class-validator";

export class CreateBookingRoomMappingDto {
    @ApiProperty({
        example: 1,
        description: 'ID of the booking',
    })
    @IsNotEmpty()
    @IsNumber()
    bookingId: number;

    @ApiProperty({
        example: 101,
        description: 'ID of the room',
    })
    @IsNotEmpty()
    @IsNumber()
    roomId: number;
}
