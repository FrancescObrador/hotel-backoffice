import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RoomFeatureService } from './room-feature.service';
import { CreateRoomFeatureDto } from './dto/create-room-feature.dto';
import { UpdateRoomFeatureDto } from './dto/update-room-feature.dto';
import { PaginationDto } from '../common/common/dtos/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Room Features (5/5)')
@Controller('room-feature')
export class RoomFeatureController {
  constructor(
    private readonly roomFeatureService: RoomFeatureService
  ) {}

  @Get()
  async findAll(@Query() query: PaginationDto) {
    return await this.roomFeatureService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.roomFeatureService.findOne(+id);
  }

  @Post()
  async create(@Body() createRoomFeatureDto: CreateRoomFeatureDto) {
    return await this.roomFeatureService.create(createRoomFeatureDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoomFeatureDto: UpdateRoomFeatureDto) {
    return await this.roomFeatureService.update(+id, updateRoomFeatureDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.roomFeatureService.remove(+id);
  }
}
