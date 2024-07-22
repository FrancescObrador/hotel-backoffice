import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Room } from "./room.entity";
import { RoomType } from "./room-type.entity";

@Entity({name: 'room_feature'})
export class RoomFeature {

    @ApiProperty({
        example: '1',
        description: 'Feature ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({
        example: 'Air Conditioning',
        description: 'Name of the feature.',
        uniqueItems: true
    })
    @Column('text')
    name: string

    @ApiProperty({
        example: 'Lorem Ipsum sic amet',
        description: 'Description of the feature.',
    })
    @Column('text')
    description: string

    @ManyToMany(() => RoomType, roomType => roomType.features)
    roomTypes: RoomType[];
}