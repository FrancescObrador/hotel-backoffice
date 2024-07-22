import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { HotelService } from './hotel.service'
import { RoomService } from '../room/room.service'
import { CreateHotelDto } from './dto/create-hotel.dto'
import { UpdateHotelDto } from './dto/update-hotel.dto'
import { PaginationDto } from '../common/common/dtos/pagination.dto'
import { CreateHotelMediaDto } from './dto/create-hotel-media.dto'
import { AddHotelFeatureDto } from './dto/create-hotel-feature-mapping'
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm'

@ApiTags('Hotels (12/12)')
@Controller('hotels')
export class HotelController {
  constructor(
    private readonly hotelService: HotelService,
    private readonly roomService: RoomService,
  ) {}

  
  @ApiOperation({description: "Returns all the hotels."})
  @Get()
  async findAll(@Query() query: PaginationDto) {
    const data = await this.hotelService.findAll(query);
    return data;
  }
  
  @ApiOperation({description: "Returns one hotel based on it's id."})
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const hotel = await this.hotelService.findOne(+id);
    return hotel;
  }

  @ApiOperation({description: "Returns the rooms for a hotel."})
  @Get(':id/rooms')
  async getRooms(@Param('id') id: string) {
    const hotel = await this.hotelService.findOne(+id);
    const rooms = await this.roomService.findByHotel(hotel.id);
    return rooms;
  }
  
  @ApiOperation({description: "Returns the rooms for a hotel."})
  @Get(':id/features')
  async getFeatures(@Param('id') id: string) {
    const features = await this.hotelService.getFeatures(+id);
    return features;
  }

  @ApiOperation({description: "Returns all the media from an hotel."})
  @Get(':id/media')
  async getHotelMedia(@Param('id') id: string){
    const media = await this.hotelService.getMedia(+id);
    return media;
  }

  @ApiOperation({description: "Creates a new hotel."})
  @Post()
  async create(@Body() createHotelDto: CreateHotelDto) {
    const insertResult: InsertResult = await this.hotelService.create(createHotelDto);
    return {success: insertResult.identifiers.length > 0};
  }

  @ApiOperation({description: "Adds an existing hotel feature to an hotel."})
  @Post('addFeature')
  async addFeatureToHotel(@Body() addHotelFeatureDto: AddHotelFeatureDto) {
    const insertResult: InsertResult = await this.hotelService.addHotelFeature(addHotelFeatureDto);
    return {success: insertResult.identifiers.length > 0 };
  }

  @ApiOperation({description: "Creates and adds a new media to an hotel."})
  @Post(':id/media')
  async addMediaToHotel(@Param('id') id: string, @Body() createHotelMedia: CreateHotelMediaDto){
    const insertResult: InsertResult = await this.hotelService.createHotelMedia(+id, createHotelMedia);
    return {success: insertResult.identifiers.length > 0};
  }

  @ApiOperation({description: "Updates the hotel."})
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    const updateResult: UpdateResult = await this.hotelService.update(+id, updateHotelDto);
    return {success: updateResult.affected > 0 };
  }

  @ApiOperation({description: "Deletes the hotel."})
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteResult: DeleteResult = await this.hotelService.delete(+id);
    return { success: deleteResult.affected > 0 };
  }

  @ApiOperation({description: "Removes an existing hotel feature from an hotel."})
  @Delete('removeFeature/:id')
  async removeHotelFeature(@Param('id') id: string, @Param('id') featureId: string) {
    const deleteResult: DeleteResult = await this.hotelService.removeHotelFeature(+id, +featureId);
    return {success: deleteResult.affected > 0 };
  }


  @ApiOperation({description: "Deletes and hotel media by it's id."})
  @Delete(':id/media/:mediaId')
  async deleteMedia(@Param('id') hotelId: string, @Param('mediaId') mediaId: string){
    const deleteResult: DeleteResult = await this.hotelService.removeMedia(+hotelId, +mediaId);
    return {success: deleteResult.affected > 0 };
  }
}