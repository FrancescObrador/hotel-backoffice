import { Module } from '@nestjs/common';
import { HotelFeatureService } from './hotel-feature.service';
import { HotelFeatureController } from './hotel-feature.controller';
import { HotelFeature } from './entities/hotel-feature.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([HotelFeature])
  ],
  controllers: [HotelFeatureController],
  providers: [HotelFeatureService],
})
export class HotelFeatureModule {}
