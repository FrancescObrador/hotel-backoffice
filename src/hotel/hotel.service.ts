import { Injectable, NotFoundException } from '@nestjs/common';
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
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { RoomMedia } from 'src/room/entities/room-media.entity';

@Injectable()
export class HotelService {
 
  constructor(
    @InjectRepository(Hotel) private readonly hotelRepo,
    @InjectRepository(HotelFeatureMapping) private readonly hotelFeatureMappingRepo,
    @InjectRepository(HotelMedia) private readonly hotelMediaRepo,
  ) {}

  async create(createHotelDto: CreateHotelDto): Promise<InsertResult> {
    const {name, address} = createHotelDto;
    const existingHotel: Hotel = this.hotelRepo.findOneBy({name, address});
   
    if (existingHotel) {
      throw new Error('This hotel already exist.');
    }

    const newHotel: Hotel = this.hotelRepo.create(createHotelDto);
    return await this.hotelRepo.insert(newHotel);
  }
  
  async createHotelMedia(createHotelMedia: CreateHotelMediaDto){
    const newHotelMedia: HotelMedia = this.hotelMediaRepo.create(createHotelMedia);
    return await this.hotelMediaRepo.insert(newHotelMedia);
  }

  async findAll(pagination: PaginationDto): Promise<Hotel[]> {
    return await this.hotelRepo.find({
      skip: pagination.skip, 
      take: pagination.limit
    });
  }

  async findOne(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepo.findOneBy({id})
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

  async addHotelFeature(addHotelFeatureDto: AddHotelFeatureDto){
    const { hotelId, featureId } = addHotelFeatureDto;

    const existingMapping: HotelFeatureMapping = await this.hotelFeatureMappingRepo.findOneBy(
      { hotelId, featureId }
    );

    if (existingMapping) {
      throw new Error('This feature is already added to the hotel.');
    }

    const hotelFeatureMapping: HotelFeatureMapping = this.hotelFeatureMappingRepo.create(addHotelFeatureDto);

    return await this.hotelFeatureMappingRepo.save(hotelFeatureMapping);
  }

  async removeHotelFeature(hotelId: number, featureId: number): Promise<DeleteResult> {
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

  async getMedia(id: number): Promise<HotelMedia[]> {
    const hotel: Hotel = await this.hotelRepo.findOne({ where: {id}, relations: ['media']});
    if(!hotel.media){
      throw new NotFoundException(`Hotel ${id} do not have media available`);
    }
    return hotel.media;
  }

  async update(id: number, updateHotelDto: UpdateHotelDto): Promise<UpdateResult> {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }

    const hotel = await this.findOne(id);
    if (!hotel) {
      throw new NotFoundException(`Hotel with id ${id} not found`);
    }

    return await this.hotelRepo.update(hotel, updateHotelDto);
  }

  async delete(id: number): Promise<DeleteResult> {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }
    return await this.hotelRepo.delete(id);
  }

  async removeMedia(hotelId: number, mediaId: number){
    const media: RoomMedia = await this.hotelMediaRepo.findOneBy({ id: mediaId, hotel: { id: hotelId } });
    if (!media) {
      throw new NotFoundException(`Media with id ${mediaId} at hotel with id ${hotelId} not found`);
    }
    return await this.hotelMediaRepo.remove(media);
  }
}
