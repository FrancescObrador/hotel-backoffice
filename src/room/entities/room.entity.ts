import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Hotel } from "src/hotel/entities/hotel.entity";
import { RoomType } from "./room_type.entity";
import { Booking } from "src/booking/entities/booking.entity";

@Entity({name: 'room'})
export class Room {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @Column('numeric')
    number: number

    @ManyToOne(() => Hotel, hotel => hotel.rooms)
    @JoinColumn({ name: 'hotel_id'}) 
    hotel: Hotel

    @ManyToOne(() => RoomType, roomType => roomType.rooms)
    @JoinColumn({ name: 'room_type_id' }) 
    roomType: RoomType

    @OneToMany(() => Booking, booking => booking.room)
    bookings?: Booking[]
} 