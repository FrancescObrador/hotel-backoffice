import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { PaginationDto } from '../common/common/dtos/pagination.dto';
import { AddRoomFeatureDto } from './dto/create-room-feature-mapping.dto';
import { RoomMedia } from './entities/room-media.entity';
import { UpdateResult } from 'typeorm';
import { CreateRoomMediaDto } from './dto/create-room-media.dto';
import { RoomFeatureMapping } from './entities/room-feature-mapping.entity';

@Injectable()
export class RoomService {

  constructor(
    @InjectRepository(Room) private readonly roomRepo,
    @InjectRepository(RoomFeatureMapping) private readonly roomFeatureMappingRepo,
    @InjectRepository(RoomMedia) private readonly roomMediaRepo,
  ) {}

  async create(createRoomDto: CreateRoomDto) {
    const { number, hotelId } = createRoomDto;
    const existingRoom: Room = this.roomRepo.findOneBy({number, hotelId});
   
    if (existingRoom) {
      throw new Error('This room already exist.');
    }

    const newRoom: Room = this.roomRepo.create(createRoomDto);
    return await this.roomRepo.insert(newRoom);
  }

  async findAll(pagination: PaginationDto): Promise<Room[]> {
      return await this.roomRepo.find({
      relations: ['hotel', 'roomType'], 
      skip: pagination.skip, 
      take: pagination.limit
    });
  }

  async findOne(id: number): Promise<Room> {
    return this.roomRepo.findOne({where: {id}, relations: ['hotel', 'roomType']});
  }

  async findByHotel(hotelId: number){
    return this.roomRepo.findBy({hotelId});
  }

  async update(id: number, updateRoomDto: UpdateRoomDto): Promise<UpdateResult> {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }
    
    const hotel = await this.findOne(id);
    
    if (!hotel) {
      throw new NotFoundException(`Hotel with id ${id} not found`);
    }

    return await this.roomRepo.update(hotel, updateRoomDto);
  }

  async delete(id: number) {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }

    const room: Room = this.roomRepo.findOne({id})
    if(!room){
      throw new NotFoundException(`Room with id ${id} not found`);
    }
    return await this.roomRepo.delete(room);
  }
  
  async getFeatures(id: number) {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }

    const room: Room = await this.findOne(id)
    if(!room){
      throw new NotFoundException(`Room ${id} not found`);
    }

    if(!room.roomType){
      throw new NotFoundException(`Room ${id} do not have features`);
    }
    return room.roomType;
  }

  async addFeature(addRoomFeatureDto: AddRoomFeatureDto) {
    const { roomId, featureId } = addRoomFeatureDto;

    const existingMapping: RoomFeatureMapping = await this.roomFeatureMappingRepo.findOneBy(
      { roomId, featureId }
    );

    if (existingMapping) {
      throw new Error('This feature is already added to the room.');
    }

    const roomFeatureMapping: RoomFeatureMapping = this.roomFeatureMappingRepo.create(addRoomFeatureDto);

    return await this.roomFeatureMappingRepo.save(roomFeatureMapping);
  }

  async removeRoomFeature(roomId: number, featureId: number) {
    if(!roomId){
      throw new NotFoundException(`Id ${roomId} not valid`);
    }
    if(!featureId){
      throw new NotFoundException(`Id ${featureId} not valid`);
    }

    const roomFeatureMapping: RoomFeatureMapping = await this.roomFeatureMappingRepo.findOneBy(
      { roomId, featureId }
    );

    return await this.roomFeatureMappingRepo.delete(roomFeatureMapping);
  }

  async getMedia(id: number): Promise<RoomMedia[]> {
    const room: Room = await this.roomRepo.findOne({ where: {id}, relations: ['media']});
    if(!room){
      throw new NotFoundException(`Room with ${id} not found.`);
    }
    if(!room.roomType.media){
      throw new NotFoundException(`Room type with ${id} do not have media available.`);
    }

    return room.roomType.media;
  }

  async createRoomMedia(createRoomMediaDto: CreateRoomMediaDto) {
    const newRoomMedia: RoomMedia = this.roomMediaRepo.create(createRoomMediaDto);
    return await this.roomMediaRepo.insert(newRoomMedia);
  }

  async removeMedia(roomId: number, mediaId: number) {
    const media: RoomMedia = await this.roomMediaRepo.findOneBy({ id: mediaId, hotel: { id: roomId } });
    if (!media) {
      throw new NotFoundException(`Media with id ${mediaId} at room with id ${roomId} not found`);
    }
    return await this.roomMediaRepo.remove(media);
  }
}
