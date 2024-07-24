import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class AddHotelFeatureDto {

  @ApiProperty({
    example: '1',
    description: 'Feature ID',
  })
  @IsInt()@IsNotEmpty()
  featureId: number
}
