import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { RoomType } from "./room-type.entity";

@Entity({name: 'room_media'})
export class RoomMedia {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({
        example: '1',
        description: 'Url of the resource.',
        uniqueItems: true
    })
    @Column()
    url: string

    @ManyToOne(() => RoomType, roomType => roomType.media)
    @JoinColumn({ name: 'room_type_id' })
    roomType: RoomType[];
}