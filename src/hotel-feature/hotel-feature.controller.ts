import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { HotelFeatureService } from './hotel-feature.service';
import { CreateHotelFeatureDto } from './dto/create-hotel-feature.dto';
import { UpdateHotelFeatureDto } from './dto/update-hotel-feature.dto';
import { PaginationDto } from '../common/common/dtos/pagination.dto';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Hotel Features (5/5)')
@Controller('hotel-feature')
export class HotelFeatureController {
  constructor(private readonly hotelFeatureService: HotelFeatureService) {}

  @Post()
  async create(@Body() createHotelFeatureDto: CreateHotelFeatureDto) {
    const insertResult: InsertResult = await this.hotelFeatureService.create(createHotelFeatureDto);
    return {success: insertResult.identifiers.length > 0};
  }

  @Get()
  async findAll(@Query() query: PaginationDto) {
    return this.hotelFeatureService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.hotelFeatureService.findOne(+id);
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
