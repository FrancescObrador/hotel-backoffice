import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingService {

  constructor(@InjectRepository(Booking) private readonly bookingRepo) {}

  create(createBookingDto: CreateBookingDto) {
    return 'This action adds a new booking';
  }

  async findAll() {
    return await this.bookingRepo.find({relations: ['room']})
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