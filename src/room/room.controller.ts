import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PaginationDto } from '../common/common/dtos/pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rooms')
@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @Get()
  async findAll(@Query() query: PaginationDto) {
    return this.roomService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.update(+id, updateRoomDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.roomService.remove(+id);
  }


  @Get(':id/features')
  async getRoomFeature(){

  }

  @Patch()
  async addRoomFeature(){

  }

  @Patch()
  async removeRoomFeature(){

  }

  @Get()
  async getRoomMedia(){

  }

  @Post()
  async createRoomMedia(){

  }

  @Delete()
  async removeRoomMedia(){

  }
}
