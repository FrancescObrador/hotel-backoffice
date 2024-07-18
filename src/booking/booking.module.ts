import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { RoomModule } from '../room/room.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { BoardPlan } from './entities/board-plan.entity';
import { BookingRoomMapping } from './entities/booking-room-mapping.entity';

@Module({
  imports: [
    RoomModule,
    TypeOrmModule.forFeature([Booking, BoardPlan, BookingRoomMapping]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService],
})
export class BookingModule {}
