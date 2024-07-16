import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class AddRoomFeatureDto {
  
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
  roomId: number

  @ApiProperty({
    example: '1',
    description: 'Feature ID',
  })
  @IsInt()@IsNotEmpty()
  featureId: number
}
