import { forwardRef, Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { RoomModule } from '../room/room.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { HotelMedia } from './entities/hotel-media.entity';
import { HotelFeatureMapping } from './entities/hotel-feature-mapping.entitiy';
import { HotelFeature } from './entities/hotel-feature.entity';

@Module({
  imports: [
    forwardRef(() => RoomModule),
    TypeOrmModule.forFeature([Hotel, HotelFeature,  HotelFeatureMapping, HotelMedia]),
  ],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {
}