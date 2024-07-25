import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomFeatureDto } from './dto/create-room-feature.dto';
import { UpdateRoomFeatureDto } from './dto/update-room-feature.dto';
import { RoomFeature } from './entities/room-feature.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationDto } from '../common/common/dtos/pagination.dto';

@Injectable()
export class RoomFeatureService {

  constructor(
    @InjectRepository(RoomFeature) private readonly roomFeatureRepo: Repository<RoomFeature>,
  ){}

  async findAll(pagination: PaginationDto) {
    const skip = pagination.page * pagination.limit;
    const roomFeatures: RoomFeature[] = await this.roomFeatureRepo.find({
      skip: skip,
      take: pagination.limit
    });

    const count = await this.roomFeatureRepo.count();
    return { count, results: roomFeatures };
  }

  async findOne(id: number) {
    const roomFeature = await this.roomFeatureRepo.findOneBy({id});
    
    if(!roomFeature) {
      throw new NotFoundException(`Room feature with id ${id} not found`);
    }
    
    return roomFeature;
  }

  async create(createRoomFeatureDto: CreateRoomFeatureDto) {
    const { name } = createRoomFeatureDto;
    const existingRoomFeature: RoomFeature = await this.roomFeatureRepo.findOneBy({ name });
    
    if (existingRoomFeature) {
      throw new ConflictException('This hotel feature already exist.');
    }

    const newRoomFeature: RoomFeature = this.roomFeatureRepo.create(createRoomFeatureDto);
    return await this.roomFeatureRepo.insert(newRoomFeature);
  }

  async update(id: number, updateRoomFeatureDto: UpdateRoomFeatureDto) {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }

    const roomFeature = await this.findOne(id);
    if (!roomFeature) {
      throw new NotFoundException(`Room feature with id ${id} not found`);
    }

    return await this.roomFeatureRepo.update({id}, updateRoomFeatureDto);
  }

  async remove(id: number) {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }
    return await this.roomFeatureRepo.delete(id);
  }
}
