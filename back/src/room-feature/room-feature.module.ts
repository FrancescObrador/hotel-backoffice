import { Module } from '@nestjs/common';
import { RoomFeatureService } from './room-feature.service';
import { RoomFeatureController } from './room-feature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomFeature } from '../room/entities/room-feature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomFeature])],
  controllers: [RoomFeatureController],
  providers: [RoomFeatureService],
})
export class RoomFeatureModule {}
