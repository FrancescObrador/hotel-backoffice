import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'hotel_feature_mapping'})
export class HotelFeatureMapping {
  
  @ApiProperty({
    example: '1',
    description: 'ID',
    uniqueItems: true
  })
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  hotelId: number;

  @Column()
  featureId: number;
}