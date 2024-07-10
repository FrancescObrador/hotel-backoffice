import { Injectable, forwardRef } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { PaginationDto } from '../common/common/dtos/pagination.dto';

@Injectable()
export class RoomService {

  constructor(@InjectRepository(Room) private readonly roomRepo) {}

  create(createRoomDto: CreateRoomDto) {
    return 'This action adds a new room';
  }

  async findAll(pagination: PaginationDto) {
    try {
      return await this.roomRepo.find({
      relations: ['hotel', 'roomType', 'bookings'], 
      skip: pagination.skip, 
      take: pagination.limit
    });
    } catch(error){
    console.log(error);
    }
  }

  findOne(id: number) {
    return this.roomRepo.findOne({where: {id}, relations: ['hotel', 'roomType', 'bookings']});
  }

  async findMany(params: Partial<Room>) {
    try{
      return await this.roomRepo.findBy(params);
    } catch(error){
      console.log(error);
    }
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}
