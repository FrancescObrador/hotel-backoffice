import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { Booking } from "./booking.entity";


export type BoardPlanType = 'room_only' | 'bed_and_breakfast' | 'half_board' | 'full_board' | 'all_included';

@Entity({name: 'board_plan'})
export class BoardPlan {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({
        example: 'Room Only',
        description: 'Room type name',
    })
    @Column('numeric')
    name: string

    @ApiProperty({
        example: 'Room only for Hotel 1',
        description: 'Board plan description',
        uniqueItems: true
    })
    @Column('text')
    description : string

    @ApiProperty({
        example: '20.00',
        description: 'Board plan price',
        uniqueItems: true
    })
    @Column('numeric')
    price : number

    @ApiProperty({
        example: '',
        description: 'Board plan price',
        enum: ['room_only', 'bed_and_breakfast', 'half_board', 'full_board', 'all_included']
    })
    @Column()
    type : BoardPlanType   
}