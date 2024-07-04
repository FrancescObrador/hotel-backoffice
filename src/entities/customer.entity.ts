import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'customer'})
export class Customer {

    @ApiProperty({
        example: '1',
        description: 'ID',
        uniqueItems: true
    })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({
        example: 'John',
        description: 'Customer name',
    })
    @Column('text')
    name: string

    @ApiProperty({
        example: 'Doe',
        description: 'Customer surname',
    })
    @Column('text')
    firtSurname: string

    @ApiProperty({
        example: 'Doe',
        description: 'Customer surname',
    })
    @Column('text')
    secondSurname: string

    @ApiProperty({
        example: 'john.doe@example.com',
        description: 'Customer email',
        uniqueItems: true
    })
    @Column('text')
    email: string

    @ApiProperty({
        example: 'Diagonal 0, Barcelona', 
        description: 'Customer address',
    })
    @Column('text')
    address: string
}