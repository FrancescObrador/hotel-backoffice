import { forwardRef, Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { HotelModule } from 'src/hotel/hotel.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { RoomFeature } from './entities/room_feature.entity';
import { RoomMedia } from './entities/room_media.entity';
import { RoomType } from './entities/room_type.entity';

@Module({
  imports: [
    forwardRef(() => HotelModule),
    TypeOrmModule.forFeature([Room, RoomFeature, RoomMedia, RoomType]),
  ],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}
