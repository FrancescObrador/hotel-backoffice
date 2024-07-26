import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
