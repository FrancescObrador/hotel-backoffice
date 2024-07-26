import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { InsertResult } from 'typeorm';
import { PaginationDto } from '../common/common/dtos/pagination.dto';

@Injectable()
export class BookingService {

  constructor(
    @InjectRepository(Booking) private readonly bookingRepo
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const booking: Booking = this.bookingRepo.create(createBookingDto);
    const insertResult: InsertResult = await this.bookingRepo.insert(booking);
    return insertResult;
  }

  async findAll(pagination: PaginationDto) {
    const skip = pagination.page * pagination.limit;
    const bookings: Booking[] = await this.bookingRepo.find({
      relations: ['rooms'], 
      skip: skip, 
      take: pagination.limit
    });

    const count = await this.bookingRepo.count();
    return {count, results: bookings};
  }

  async findOne(id: number) {
    const booking = await this.bookingRepo.findOneBy({id});
    
    if(!booking) {
      throw new NotFoundException(`Hotel feature with id ${id} not found`);
    }
    
    return booking;
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }

    const booking = await this.findOne(id);
    if (!booking) {
      throw new NotFoundException(`Hotel feature with id ${id} not found`);
    }

    return await this.bookingRepo.update({id}, updateBookingDto);
  }

  async delete(id: number) {
    if(!id){
      throw new NotFoundException(`Id ${id} not valid`);
    }
    return await this.bookingRepo.delete(id);
  }
}
