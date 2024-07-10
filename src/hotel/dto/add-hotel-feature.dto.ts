import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class AddHotelFeatureDto {
  
  @ApiProperty({
    example: '1',
    description: 'Mapping ID',
    uniqueItems: true
  })
  @PrimaryGeneratedColumn()
  id: number
  
  @ApiProperty({
    example: '1',
    description: 'Hotel ID',
  })
  @IsInt()
  @IsNotEmpty()
  hotelId: number

  @ApiProperty({
    example: '1',
    description: 'Feature ID',
  })
  @IsInt()@IsNotEmpty()
  featureId: number
}
