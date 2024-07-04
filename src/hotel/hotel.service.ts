import { Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { PaginationDto } from 'src/common/common/dtos/pagination.dto';
import { HotelFeature } from './entities/hotel_feature.entity';

@Injectable()
export class HotelService {
 
  constructor(@InjectRepository(Hotel) private readonly hotelRepo) {}

  create(createHotelDto: CreateHotelDto) {
    return this.hotelRepo.save(createHotelDto)
  }

  async findAll(pagination: PaginationDto): Promise<Hotel[]> {
    return await this.hotelRepo.find({skip: pagination.offset, take: pagination.limit})
  }

  async findOne(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepo.findOne({where: {id}})
    if(!hotel) {
      throw new NotFoundException(`Hotel with id ${id} not found`)
    }
    return hotel
  }

  async getFeatures(id: number): Promise<HotelFeature[]>{
    const hotel: Hotel = await this.hotelRepo.findOne({ where: {id}, relations: ['features']})
    if(!hotel.features){
      throw new NotFoundException(`Hotel ${id} do not have features`)
    }
    return hotel.features
  }

  async update(id: number, updateHotelDto: UpdateHotelDto): Promise<any> {
    if(!id){
      throw new NotFoundException(`Hotel with id ${id} not found`)
    }
    try{
      return await this.hotelRepo.update(id, updateHotelDto)
    } catch(error) {
      console.log(error)
    }
  }

  async remove(id: number) {
    if(!id){
      throw new NotFoundException(`Hotel with id ${id} not found`)
    }
    return await this.hotelRepo.delete(id)
  }
}
