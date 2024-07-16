import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Hotel } from "../../hotel/entities/hotel.entity";
import { Room } from "./room.entity";
import { RoomFeature } from "./room-feature.entity";
import { RoomMedia } from "./room-media.entity";

@Entity({name: 'room_type'})
export class RoomType {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 'Room Type 1 Hotel 1',
        description: 'ID',
        uniqueItems: true
    })
    @Column('text')
    name: string;
  
    @ApiProperty({
        example: 'Lorem ipsum sit ament',
        description: 'ID',
    })
    @Column('text')
    description: string;
  
    @ApiProperty({
        example: '1',
        description: 'ID',
    })
    @Column('numeric')
    capacity: number;
  
    @ApiProperty({
        example: '1',
        description: 'ID',
    })
    @Column('decimal', { precision: 5, scale: 2 , name: 'base_price'})
    basePrice: number;
  
    @ManyToOne(() => Hotel, hotel => hotel.rooms)
    @JoinColumn({ name: 'hotel_id' }) 
    hotel: Hotel;

    @ManyToMany(() => RoomFeature, {eager: true})
    @JoinTable({name: 'room_feature_mapping',
        joinColumn: {
            name: 'room_type_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn:{
            name: 'room_feature_id',
            referencedColumnName: 'id'
        }
    })
    features?: RoomFeature[];

    @OneToMany(() => RoomMedia, media => media.roomType)
    media?: RoomMedia[];
  
    @OneToMany(type => Room, room => room.roomType)
    rooms?: Room[];
}