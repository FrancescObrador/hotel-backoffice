import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateHotelMediaDto {
    @ApiProperty({
        example: 'https://example.com/media.jpg',
        description: 'URL of the hotel media',
      })
      @IsNotEmpty()
      @IsUrl()
      url: string;
    
      @ApiProperty({
        example: 1,
        description: 'ID of the associated hotel',
      })
      @IsNotEmpty()
      @IsInt()
      hotelId: number;
}
