import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { ApiProperty } from "@nestjs/swagger"
import { Room } from '../../room/entities/room.entity'

@Entity({ name: 'booking' })
export class Booking {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: '2022-01-01',
        description: 'Check-in date',
    })
    @Column('date', { name: 'check_in_date' })
    checkInDate: Date;

    @ApiProperty({
        example: '2022-01-01',
        description: 'Check-out date',
    })
    @Column('date', { name: 'check_out_date' })
    checkOutDate: Date;

    @ApiProperty({
        type: () => Room,
        isArray: true,
        description: 'Rooms associated with the booking',
    })
    @ManyToMany(() => Room)
    @JoinTable({
        name: 'booking_room_mapping',
        joinColumn: { name: 'booking_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'room_id', referencedColumnName: 'id' },
    })
    rooms: Room[];
}
