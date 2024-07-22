import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'booking_room_mapping' })
export class BookingRoomMapping {
    @ApiProperty({
        example: 1,
        description: 'ID of the mapping',
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 1,
        description: 'ID of the booking',
    })
    @Column()
    bookingId: number;

    @ApiProperty({
        example: 101,
        description: 'ID of the room',
    })
    @Column()
    roomId: number;
}
