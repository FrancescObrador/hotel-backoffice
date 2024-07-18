import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsUrl } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateHotelMediaDto {
  
    @ApiProperty({
        example: 'https://example.com/media.jpg',
        description: 'URL of the hotel media',
      })
      @IsNotEmpty()
      @IsUrl()
      url: string;
}
