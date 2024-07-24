import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelFeatureDto } from './dto/create-hotel-feature.dto';
import { UpdateHotelFeatureDto } from './dto/update-hotel-feature.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { HotelFeature } from './entities/hotel-feature.entity';
import { PaginationDto } from '../common/common/dtos/pagination.dto';
import { GetResponseDto } from 'src/common/common/dtos/response.dto';

@Injectable()
export class HotelFeatureService {

  constructor(
    @InjectRepository(HotelFeature) private readonly hotelFeatureRepo: Repository<HotelFeature>,
  ){}

  
  async findAll(pagination: PaginationDto): Promise<GetResponseDto<HotelFeature>> {
    const hotelFeatures: HotelFeature[] = await this.hotelFeatureRepo.find({
      skip: pagination.skip, 
      take: pagination.limit
    });

    const count = await this.hotelFeatureRepo.count();

    return {count, results: hotelFeatures};
  }
  
  async findOne(id: number): Promise<HotelFeature> {
    const hotelFeature = await this.hotelFeatureRepo.findOneBy({id});
    
    if(!hotelFeature) {
      throw new NotFoundException(`Hotel with id ${id} not found`);
    }
    
    return hotelFeature;
  }
  
  async create(createHotelFeatureDto: CreateHotelFeatureDto): Promise<InsertResult> {
    const { name } = createHotelFeatureDto;
    const existingHotelFeature: HotelFeature = await this.hotelFeatureRepo.findOneBy({ name });
    
    if (existingHotelFeature) {
      throw new ConflictException('This hotel feature already exist.');
    }

    const newHotelFeature: HotelFeature = this.hotelFeatureRepo.create(createHotelFeatureDto);
    return await this.hotelFeatureRepo.insert(newHotelFeature);
  }

  async update(id: number, updateHotelFeatureDto: UpdateHotelFeatureDto): Promise<UpdateResult> {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }

    const hotelFeature = await this.findOne(id);
    if (!hotelFeature) {
      throw new NotFoundException(`Hotel with id ${id} not found`);
    }

    return await this.hotelFeatureRepo.update({id}, updateHotelFeatureDto);
  }

  async delete(id: number): Promise<DeleteResult> {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }
    return await this.hotelFeatureRepo.delete(id);
  }
}
