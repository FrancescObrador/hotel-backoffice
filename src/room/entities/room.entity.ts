import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Hotel } from "../../hotel/entities/hotel.entity";
import { RoomType } from "./room-type.entity";
import { Booking } from "../../booking/entities/booking.entity";
import { RoomFeature } from "./room-feature.entity";
import { HotelFeature } from "src/hotel/entities/hotel-feature.entity";
import { RoomMedia } from "./room-media.entity";

@Entity({name: 'room'})
export class Room {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: '1',
        description: 'Identification number of the room.',
        uniqueItems: true
    })
    @Column('numeric')
    number: number;

    @ManyToOne(() => Hotel, hotel => hotel.rooms)
    @JoinColumn({ name: 'hotel_id'}) 
    hotel: Hotel;

    @ManyToOne(() => RoomType, roomType => roomType.rooms)
    @JoinColumn({ name: 'room_type_id' }) 
    roomType: RoomType;

    @OneToMany(() => Booking, (bookings) => bookings.rooms)
    bookings?: Booking[];
} 