import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Hotel, Room } from ".";

@Entity({name: 'room_type'})
export class RoomType {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
  
    @Column()
    description: string
  
    @Column()
    capacity: number
  
    @Column('decimal', { precision: 5, scale: 2 , name: 'base_price'})
    basePrice: number
  
    @ManyToOne(type => Hotel, hotel => hotel.rooms)
    @JoinColumn({ name: 'hotel_id' }) 
    hotel: Hotel
  
    @OneToMany(type => Room, room => room.roomType)
    //@JoinColumn({ name: 'rooms_id' }) 
    rooms: Room[]
}