import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardPlan, Booking, Customer, Hotel, HotelFeature, HotelMedia, Payment, Room, RoomMedia, RoomType } from './entities';

@Module({
  controllers: [HotelController],
  providers: [HotelService],
  imports: [
    TypeOrmModule.forFeature([
      BoardPlan,
      Booking,
      Customer,
      Hotel,
      HotelFeature,
      HotelMedia,
      Payment,
      Room,
      RoomMedia,
      RoomType,
    ]),
  ],
})
export class HotelModule {}
