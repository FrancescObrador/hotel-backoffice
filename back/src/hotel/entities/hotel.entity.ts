import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Room } from "../../room/entities/room.entity";
import { HotelFeature } from "./hotel-feature.entity";
import { HotelMedia } from "./hotel-media.entity";

@Entity({name: 'hotel'})
export class Hotel {

    @ApiProperty({
        example: '1',
        description: 'Hotel ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({
        example: 'Hotel Nirvana',
        description: 'Hotel name',
    })
    @Column('text')
    name: string;

    @ApiProperty({
        example: '123 Main Street',
        description: 'Hotel address',
    })
    @Column('text')
    address: string;

    @ApiProperty({
        example: '+34 123 456 789',
        description: 'Hotel phone number',
        uniqueItems: true
    })
    @Column('text')
    phone : string;

    @ApiProperty({
        example: 'nirvana@hotel.com',
        description: 'Hotel email',
        uniqueItems: true
    })
    @Column('text',{
        unique: true
    })
    email : string;

    @ApiProperty({
        example: 5,
        description: 'Hotel stars',
    })
    @Column('numeric')
    stars: number;
    
    @ManyToMany(
        () => HotelFeature
    )
    @JoinTable({name: 'hotel_feature_mapping',
        joinColumn: {
            name: 'hotel_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn:{
            name: 'feature_id',
            referencedColumnName: 'id'
        }
    })
    features?: HotelFeature[];

    @OneToMany(
        () => HotelMedia, 
        media => media.hotel, 
    )
    media?: HotelMedia[];


    @OneToMany(
        ()=>Room,
        (room) => room.hotel
    )
    rooms?: Room[];
}
