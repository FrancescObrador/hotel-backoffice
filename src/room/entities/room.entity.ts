import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Hotel } from "../../hotel/entities/hotel.entity";
import { RoomType } from "./room-type.entity";
import { Booking } from "../../booking/entities/booking.entity";

@Entity({ name: 'room' })
export class Room {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: '101',
        description: 'Identification number of the room.',
        uniqueItems: true
    })
    @Column('numeric')
    number: number;

    @ManyToOne(() => Hotel, hotel => hotel.rooms)
    @JoinColumn({ name: 'hotel_id' })
    hotel: Hotel;

    @ManyToOne(() => RoomType, roomType => roomType.rooms)
    @JoinColumn({ name: 'room_type_id' })
    roomType: RoomType;

    @ManyToMany(() => Booking)
    @JoinTable({
        name: 'booking_room_mapping',
        joinColumn: { name: 'room_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'booking_id', referencedColumnName: 'id' },
    })
    bookings: Booking[];
}