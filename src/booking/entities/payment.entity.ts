import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'payment'})
export class Payment {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({
        example: '10',
        description: 'Payment amount',
    })
    @Column('numeric')
    amount: number

    @ApiProperty({
        example: '2024-06-12',
        description: 'Payment date',
    })
    @Column('date')
    paymentDate: Date

    @ApiProperty({
        example: 'Cash',
        description: 'Payment method',
    })
    @Column('text')
    paymentMethod: string
}