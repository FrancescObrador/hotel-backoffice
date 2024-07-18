import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { AddRoomFeatureDto } from './dto/create-room-feature-mapping.dto';
import { CreateRoomMediaDto } from './dto/create-room-media.dto';
import { PaginationDto } from '../common/common/dtos/pagination.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';

@ApiTags('Rooms (11/11)')
@Controller('rooms')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @ApiOperation({description: "Creates a new room."})
  @Post()
  async create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  @ApiOperation({description: "Returns all the rooms."})
  @Get()
  async findAll(@Query() query: PaginationDto) {
    return this.roomService.findAll(query);
  }

  @ApiOperation({description: "Return one room based on it's id."})
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.roomService.findOne(+id);
  }

  @ApiOperation({description: "Update the room."})
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoomDto: UpdateRoomDto) {
    const updateResult: UpdateResult =  await this.roomService.update(+id, updateRoomDto);
    return { success: updateResult.affected > 0}
  }

  @ApiOperation({description: "Delete the room."})
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.roomService.delete(+id);
  }

  @ApiOperation({description: "Returns all the room features."})
  @Get(':id/features')
  async getRoomFeature(@Param('id') id: string){
    return await this.roomService.getFeatures(+id);
  }

  @ApiOperation({description: "Adds an existing room feature to a room."})
  @Post('addFeature')
  async addFeatureToRoom(addRoomFeatureDto: AddRoomFeatureDto){
    return await this.roomService.addFeature(addRoomFeatureDto);
  }

  @ApiOperation({description: "Removes an existing room feature from a room."})
  @Delete(':id/removeFeature/:id')
  async removeRoomFeature(@Param('id') id: string, @Param('id') featureId: string){
    return await this.roomService.removeRoomFeature(+id, +featureId);
  }

  @ApiOperation({description: "Returns all the media from a room."})
  @Get(':id/media')
  async getRoomMedia(@Param('id') id: string){
    return await this.roomService.getMedia(+id);
  }

  @ApiOperation({description: "Creates and adds a new media to a room."})
  @Post(':id/media')
  async addMediaToRoom(createRoomMediaDto: CreateRoomMediaDto){
    return await this.roomService.createRoomMedia(createRoomMediaDto)
  }

  @ApiOperation({description: "Deletes a room media by it's id."})
  @Delete(':id/media/:mediaId')
  async removeRoomMedia(@Param('id') id: string, @Param('mediaId') mediaId: string){
    return await this.roomService.removeMedia(+id, +mediaId)
  }
}
