import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateBookingDto {
    @ApiProperty({
        example: '2022-01-01',
        description: 'Check-in date',
    })
    @IsNotEmpty()
    @IsDate()
    checkInDate: Date;

    @ApiProperty({
        example: '2022-01-02',
        description: 'Check-out date',
    })
    @IsNotEmpty()
    @IsDate()
    checkOutDate: Date;

    @ApiProperty({
        type: () => RoomDto,
        isArray: true,
        description: 'Rooms associated with the booking',
    })
    @ValidateNested({ each: true })
    @Type(() => RoomDto)
    rooms: RoomDto[];
}

export class RoomDto {
    @ApiProperty({
        example: 101,
        description: 'Room ID',
    })
    @IsNumber()
    id: number;
}
