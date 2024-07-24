import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateHotelMediaDto {
  
    @ApiProperty({
        example: 'https://example.com/media.jpg',
        description: 'URL of the hotel media',
      })
      @IsNotEmpty()
      @IsUrl()
      url: string;
}
