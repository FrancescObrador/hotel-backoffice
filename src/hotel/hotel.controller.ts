import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { PaginationDto } from 'src/common/common/dtos/pagination.dto';
import { RoomService } from '../room/room.service';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Hotel')
@Controller('hotel')
export class HotelController {
  constructor(
    private readonly hotelService: HotelService,
    private readonly roomService: RoomService,
  ) {}

  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.create(createHotelDto);
  }

  @Get()
  findAll(@Query()  query: PaginationDto) {
    return this.hotelService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelService.findOne(+id);
  }

  @ApiOperation({description: "Returns the rooms for a hotel."})
  @Get(':id/rooms')
  async getRooms(@Param('id') id: string) {
    const hotel = await this.hotelService.findOne(+id)
    return await this.roomService.findMany({hotel})
  }

  @ApiOperation({description: "Returns the rooms for a hotel."})
  @Get(':id/features')
  async getFeatures(@Param('id') id: string) {
    return await this.hotelService.getFeatures(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelService.update(+id, updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelService.remove(+id);
  }
}
