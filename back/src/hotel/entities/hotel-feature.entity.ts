import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Hotel } from "./hotel.entity";

@Entity({name: 'hotel_feature'})
export class HotelFeature {

    @ApiProperty({
        example: '1',
        description: 'Product ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    name: string

    @Column('text')
    description: string

    @ManyToMany(
        () => Hotel,
        hotel => hotel.features
    )
    hotels?: Hotel[]
}