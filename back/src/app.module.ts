import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { join } from 'path';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';

import { CommonModule } from './common/common/common.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { BookingModule } from './booking/booking.module';
import { HotelModule } from './hotel/hotel.module';
import { RoomModule } from './room/room.module';
import { HotelFeatureModule } from './hotel-feature/hotel-feature.module';
import { RoomFeatureModule } from './room-feature/room-feature.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        database: configService.get<string>('DB_NAME'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        autoLoadEntities: true,
        //synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CommonModule,
    HotelModule,
    RoomModule,
    BookingModule,
    HotelFeatureModule,
    RoomFeatureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}