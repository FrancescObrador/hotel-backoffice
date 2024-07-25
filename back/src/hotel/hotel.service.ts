import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { CreateHotelMediaDto } from './dto/create-hotel-media.dto';
import { AddHotelFeatureDto } from './dto/create-hotel-feature-mapping';
import { PaginationDto } from '../common/common/dtos/pagination.dto';
import { Hotel } from './entities/hotel.entity';
import { HotelFeature } from './entities/hotel-feature.entity';
import { HotelMedia } from './entities/hotel-media.entity';
import { HotelFeatureMapping } from './entities/hotel-feature-mapping.entitiy';
import { DeepPartial, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { GetResponseDto } from 'src/common/common/dtos/response.dto';

@Injectable()
export class HotelService {
 
  constructor(
    @InjectRepository(Hotel) private readonly hotelRepo: Repository<Hotel>,
    @InjectRepository(HotelFeatureMapping) private readonly hotelFeatureMappingRepo: Repository<HotelFeatureMapping>,
    @InjectRepository(HotelMedia) private readonly hotelMediaRepo: Repository<HotelMedia>,
  ) {}

  async findAll(pagination: PaginationDto): Promise<GetResponseDto<Hotel>> {
    const skip = pagination.page * pagination.limit;
    
    const hotels: Hotel[] = await this.hotelRepo.find({
      skip: skip, 
      take: pagination.limit
    });

    const count = await this.hotelRepo.count();

    return {count, results: hotels}
  
  }

  async findOne(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepo.findOne({
      where: { id},
      relations: ['features', 'media', 'rooms']
    });

    if(!hotel) {
      throw new NotFoundException(`Hotel with id ${id} not found`);
    }
    return hotel;
  }

  async getFeatures(id: number): Promise<HotelFeature[]>{
    const hotel: Hotel = await this.hotelRepo.findOne({ where: {id}, relations: ['features']});
    if(!hotel.features){
      throw new NotFoundException(`Hotel ${id} do not have features`);
    }
    return hotel.features;
  }

  async getMedia(id: number): Promise<HotelMedia[]> {
    const hotel: Hotel = await this.hotelRepo.findOne({ where: {id}, relations: ['media']});
    if(!hotel.media){
      throw new NotFoundException(`Hotel ${id} do not have media available`);
    }
    return hotel.media;
  }

  async create(createHotelDto: CreateHotelDto) {
    const {name, address} = createHotelDto;
    const existingHotel: boolean = await this.hotelRepo.exists({ where: { name, address } });

    if (existingHotel) {
      throw new Error('This hotel already exist.');
    }

    const model: DeepPartial<Hotel> = createHotelDto;

    const newHotel: Hotel = this.hotelRepo.create(model);
    const insertResult: InsertResult = await this.hotelRepo.insert(newHotel);

    return newHotel;
  }

  async createHotelMedia(id: number, createHotelMedia: CreateHotelMediaDto): Promise<InsertResult> {
    const model: DeepPartial<HotelMedia> = createHotelMedia;
    model.hotelId = id;
    
    const newHotelMedia: HotelMedia = this.hotelMediaRepo.create(model);
    const insertResult: InsertResult = await this.hotelMediaRepo.insert(newHotelMedia);

    return insertResult;
  }

  async createHotelFeature(hotelId: number,addHotelFeatureDto: AddHotelFeatureDto){
    const { featureId } = addHotelFeatureDto;

    const mappingExists: boolean = await this.hotelFeatureMappingRepo.exists({
      where: { hotelId, featureId }
    });

    if (mappingExists) {
      throw new Error('This feature is already added to the hotel.');
    }

    const hotelFeatureMapping: HotelFeatureMapping = this.hotelFeatureMappingRepo.create(addHotelFeatureDto);

    const insertResult: InsertResult = await this.hotelFeatureMappingRepo.insert(hotelFeatureMapping);
    return insertResult;
  }

  async update(id: number, updateHotelDto: UpdateHotelDto): Promise<UpdateResult> {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }
    
    const hotel = await this.findOne(id);
    if (!hotel) {
      throw new NotFoundException(`Hotel with id ${id} not found`);
    }
    
    return await this.hotelRepo.update({id}, updateHotelDto);
  }
  
  async delete(id: number): Promise<DeleteResult> {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }
    return await this.hotelRepo.delete(id);
  }

  async deleteHotelFeature(hotelId: number, featureId: number): Promise<DeleteResult> {
    if(!hotelId){
      throw new NotFoundException(`Id ${hotelId} not valid`);
    }
    if(!featureId){
      throw new NotFoundException(`Id ${featureId} not valid`);
    }

    const hotelFeatureMapping: HotelFeatureMapping = await this.hotelFeatureMappingRepo.findOneBy(
      { hotelId, featureId }
    );

    return await this.hotelFeatureMappingRepo.delete(hotelFeatureMapping);
  }

 
  async deleteMedia(hotelId: number, mediaId: number){
    const media: HotelMedia = await this.hotelMediaRepo.findOneBy({ id: mediaId, hotel: { id: hotelId } });
   
    if (!media) {
      throw new NotFoundException(`Media with id ${mediaId} at hotel with id ${hotelId} not found`);
    }
    const deleteResult: DeleteResult = await this.hotelMediaRepo.delete(media);
    return deleteResult;
  }
}
