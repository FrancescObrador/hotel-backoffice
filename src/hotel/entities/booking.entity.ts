import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";
import { BoardPlan, Room } from '.';

@Entity({name: 'booking'})
export class Booking {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({
        example: '2022-01-01',
        description: 'Check-in data',
    })
    @Column('date', {name: 'check_in_date'})
    checkInDate: Date

    @ApiProperty({
        example: '2022-01-01',
        description: 'Check-in data',
    })
    @Column('date', {name: 'check_out_date'})
    checkOutDate: Date

    @ManyToOne(() => Room, room => room.bookings)
    @JoinColumn({ name: 'room_id' }) 
    room: Room

    // @ManyToOne(
    //     ()=>BoardPlan,
    //     {eager: true}
    // )
    // boardPlan: BoardPlan
}