import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { HotelService } from './hotel.service'
import { RoomService } from '../room/room.service'
import { CreateHotelDto } from './dto/create-hotel.dto'
import { UpdateHotelDto } from './dto/update-hotel.dto'
import { PaginationDto } from '../common/common/dtos/pagination.dto'
import { CreateHotelMediaDto } from './dto/create-hotel-media.dto'
import { AddHotelFeatureDto } from './dto/add-hotel-feature.dto'
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm'

@ApiTags('Hotels')
@Controller('hotels')
export class HotelController {
  constructor(
    private readonly hotelService: HotelService,
    private readonly roomService: RoomService,
  ) {}

  @ApiOperation({description: "Creates a new hotel."})
  @Post()
  async create(@Body() createHotelDto: CreateHotelDto) {
    const insertResult: InsertResult = await this.hotelService.create(createHotelDto);
    return {success: insertResult.identifiers.length > 0}
  }

  @ApiOperation({description: "Returns all the hotels."})
  @Get()
  async findAll(@Query() query: PaginationDto) {
    return await this.hotelService.findAll(query);
  }

  @ApiOperation({description: "Returns one hotel based on it's id."})
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.hotelService.findOne(+id);
  }

  @ApiOperation({description: "Updates the hotel."})
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    const updateResult: UpdateResult = await this.hotelService.update(+id, updateHotelDto);
    return {success: updateResult.affected > 0}
  }

  @ApiOperation({description: "Deletes the hotel."})
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteResult: DeleteResult = await this.hotelService.delete(+id);
    return {affected: deleteResult.affected}
  }

  @ApiOperation({description: "Returns the rooms for a hotel."})
  @Get(':id/rooms')
  async getRooms(@Param('id') id: string) {
    const hotel = await this.hotelService.findOne(+id);
    return await this.roomService.findMany({hotel});
  }

  @ApiOperation({description: "Returns the rooms for a hotel."})
  @Get(':id/features')
  async getFeatures(@Param('id') id: string) {
    return await this.hotelService.getFeatures(+id);
  }

  @ApiOperation({description: "Adds an existing hotel feature to an hotel."})
  @Post('addFeatureToHotel')
  async addFeatureToHotel(@Body() addHotelFeatureDto: AddHotelFeatureDto) {
    return await this.hotelService.addFeature(addHotelFeatureDto);
  }

  @ApiOperation({description: "Returns all the media from an hotel."})
  @Get(':id/media')
  async getHotelMedia(@Param('id') id: string){
    return await this.hotelService.getMedia(+id);
  }

  @ApiOperation({description: "Creates and adds a new media to an hotel."})
  @Post(':id/media')
  async addMediaToHotel(@Body() createHotelMedia: CreateHotelMediaDto){
    return await this.hotelService.createHotelMedia(createHotelMedia);
  }

  @ApiOperation({description: "Deletes and hotel media by it's id."})
  @Delete(':id/media/:mediaId')
  async deleteMedia(@Param('id') hotelId: string, @Param('mediaId') mediaId: string){
    return await this.hotelService.removeMedia(+hotelId, +mediaId);
  }
}