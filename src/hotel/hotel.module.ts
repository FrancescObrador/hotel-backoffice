import { forwardRef, Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { RoomModule } from 'src/room/room.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { HotelFeature } from './entities/hotel_feature.entity';
import { HotelMedia } from './entities/hotel_media.entity';

@Module({
  imports: [
    forwardRef(() => RoomModule),
    TypeOrmModule.forFeature([Hotel, HotelFeature, HotelMedia]),
  ],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {
}