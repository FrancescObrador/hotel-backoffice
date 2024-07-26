import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiTags } from '@nestjs/swagger';
import { InsertResult } from 'typeorm';
import { PaginationDto } from '../common/common/dtos/pagination.dto';

@ApiTags('Bookings (5/5)')
@Controller('booking')
export class BookingController {
  constructor(
    private readonly bookingService: BookingService
  ) {}
  
  @Get()
  async findAll(@Query() query: PaginationDto) {
    return this.bookingService.findAll(query);
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }
  
  @Post()
  async create(@Body() createBookingDto: CreateBookingDto) {
    const insertResult: InsertResult = await this.bookingService.create(createBookingDto);
    return (insertResult.identifiers.length > 0);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bookingService.delete(+id);
  }
}
