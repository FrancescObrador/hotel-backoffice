import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HotelFeatureService } from './hotel-feature.service';
import { CreateHotelFeatureDto } from './dto/create-hotel-feature.dto';
import { UpdateHotelFeatureDto } from './dto/update-hotel-feature.dto';
import { PaginationDto } from '../common/common/dtos/pagination.dto';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { HotelFeature } from './entities/hotel-feature.entity';

@ApiTags('Hotel Features (5/5)')
@Controller('hotel-feature')
export class HotelFeatureController {
  constructor(
    private readonly hotelFeatureService: HotelFeatureService
  ) {}

  
  @Get()
  async findAll(@Query() query: PaginationDto) {
    const data = await this.hotelFeatureService.findAll(query);
    return data;
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const hotelFeature: HotelFeature = await this.hotelFeatureService.findOne(+id);
    return hotelFeature;
  }

  @Post()
  async create(@Body() createHotelFeatureDto: CreateHotelFeatureDto) {
    const insertResult: InsertResult = await this.hotelFeatureService.create(createHotelFeatureDto);
    return {success: insertResult.identifiers.length > 0};
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHotelFeatureDto: UpdateHotelFeatureDto) {
    const updateResult: UpdateResult = await this.hotelFeatureService.update(+id, updateHotelFeatureDto);
    return {success: updateResult.affected > 0}
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleteResult: DeleteResult = await this.hotelFeatureService.delete(+id);
    return {affected: deleteResult.affected};
  }
}
