import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'room_media'})
export class RoomMedia {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number
}