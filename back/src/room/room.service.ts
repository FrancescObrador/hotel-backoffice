import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { PaginationDto } from '../common/common/dtos/pagination.dto';
import { AddRoomFeatureDto } from './dto/create-room-feature-mapping.dto';
import { RoomMedia } from './entities/room-media.entity';
import { DeleteResult, UpdateResult, Repository, InsertResult } from 'typeorm';
import { CreateRoomMediaDto } from './dto/create-room-media.dto';
import { RoomFeatureMapping } from './entities/room-feature-mapping.entity';
import { RoomType } from './entities/room-type.entity';

@Injectable()
export class RoomService {

  constructor(
    @InjectRepository(Room) private readonly roomRepo: Repository<Room>,
    @InjectRepository(RoomFeatureMapping) private readonly roomFeatureMappingRepo: Repository<RoomFeatureMapping>,
    @InjectRepository(RoomMedia) private readonly roomMediaRepo: Repository<RoomMedia>,
    @InjectRepository(RoomType) private readonly roomTypeRepo: Repository<RoomType>,
  ) {}

  async create(createRoomDto: CreateRoomDto) {
    const { number, hotelId } = createRoomDto;
    const RoomExists: boolean = await this.roomRepo.exists({
      where: {number, hotel: { id: hotelId }}
    });
   
    if (RoomExists) {
      throw new Error('This room already exist.');
    }

    const newRoom: Room = this.roomRepo.create(createRoomDto);
    const insertResult: InsertResult = await this.roomRepo.insert(newRoom);
    return insertResult;
  }

  async findAll(pagination: PaginationDto): Promise<Room[]> {
    const skip = pagination.page * pagination.limit;
    const rooms: Room[] = await this.roomRepo.find({
      relations: ['hotel', 'roomType'], 
      skip: skip, 
      take: pagination.limit
    });
    return rooms;
  }

  async findOne(id: number): Promise<Room> {
    const room: Room = await this.roomRepo.findOne({where: {id}, relations: ['hotel', 'roomType']});
    return room;
  }

  async findByHotel(hotelId: number): Promise<Room[]> {
    if(!hotelId){
      throw new NotFoundException(`Id ${hotelId} not valid`);
    }

    const rooms: Room[] = await this.roomRepo.find({ 
      where : { 
        hotel: { id: hotelId } 
      } 
    });

    if(!rooms){
      throw new NotFoundException(`Hotel with id ${hotelId} not found`);
    }

    return rooms;
  }

  async update(id: number, updateRoomDto: UpdateRoomDto): Promise<UpdateResult> {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }
    
    const hotel = await this.findOne(id);
    
    if (!hotel) {
      throw new NotFoundException(`Hotel with id ${id} not found`);
    }

    const updateResult: UpdateResult = await this.roomRepo.update({id}, updateRoomDto);
    return updateResult;
  }

  async delete(id: number) {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }

    const existingRoom: Room = await this.roomRepo.findOneBy({id});

    if(!existingRoom){
      throw new NotFoundException(`Room with id ${id} not found`);
    }
    const deleteResult: DeleteResult = await this.roomRepo.delete(existingRoom);
    return deleteResult;
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
    
    return room.roomType.features;
  }

  async addFeature(addRoomFeatureDto: AddRoomFeatureDto) {
    const { roomId, featureId } = addRoomFeatureDto;

    const mappingExists: boolean = await this.roomFeatureMappingRepo.exists({ 
      where: { roomId, featureId } 
    });

    if (mappingExists) {
      throw new Error('This feature is already added to the room.');
    }

    const roomFeatureMapping: RoomFeatureMapping = this.roomFeatureMappingRepo.create(addRoomFeatureDto);
    const insertResult: InsertResult = await this.roomFeatureMappingRepo.insert(roomFeatureMapping);
    return insertResult;
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

    const deleteResult: DeleteResult = await this.roomFeatureMappingRepo.delete(roomFeatureMapping);
    return deleteResult;
  }

  async getMedia(id: number): Promise<RoomMedia[]> {
    const room: Room = await this.roomRepo.findOne({ where: {id}, relations: ['roomType'] });
    
    if(!room){
      throw new NotFoundException(`Room with id ${id} not found.`);
    }

    if(!room.roomType){
      throw new NotFoundException(`Room type in room with id ${id} not found.`);
    }

    if(!room.roomType.media){
      throw new NotFoundException(`Room type with ${id} do not have media available.`);
    }

    return room.roomType.media;
  }

  async createRoomMedia(createRoomMediaDto: CreateRoomMediaDto) {
    const newRoomMedia: RoomMedia = this.roomMediaRepo.create(createRoomMediaDto);
    const insertResult: InsertResult = await this.roomMediaRepo.insert(newRoomMedia);
    return insertResult;
  }

  async removeMedia(roomId: number, mediaId: number) {

    const roomType: RoomType = await this.roomTypeRepo.findOneBy({ id: roomId });

    if(!roomType){
      throw new NotFoundException(`Room type of ${roomId} not found.`);
    }

    const existingMedia: RoomMedia = await this.roomMediaRepo.findOneBy({ id: roomType.id });

    if (existingMedia) {
      throw new NotFoundException(`Media with id ${mediaId} at room with id ${roomId} not found`);
    }
    
    const deleteResult: DeleteResult = await this.roomMediaRepo.delete(existingMedia);
    return deleteResult;
  }
}
