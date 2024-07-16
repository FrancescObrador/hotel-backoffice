import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Hotel } from "./hotel.entity";

@Entity({name: 'hotel_media'})
export class HotelMedia {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @ManyToOne(() => Hotel, hotel => hotel.rooms)
    @JoinColumn({ name: 'hotel_id'}) 
    hotel: Hotel
}