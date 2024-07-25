import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { RoomType } from "../../room/entities/room-type.entity";

@Entity({name: 'room_feature'})
export class RoomFeature {

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
        () => RoomType,
        roomType => roomType.features
    )
    roomTypes?: RoomType[]
}