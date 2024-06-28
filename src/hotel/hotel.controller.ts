import { Controller, Get, Param, Query } from '@nestjs/common';
import { PaginationDto } from 'src/common/common/dtos/pagination.dto';
import { ApiResponse } from '@nestjs/swagger';

import { Hotel, Room } from './entities';

import { HotelService } from './hotel.service';
import { HotelSearchDto } from './dtos/hotel-search.dto';

@Controller('hotels')
export class HotelController {

    constructor(private readonly hotelService: HotelService) {}

    @Get()
    @ApiResponse({type: [Hotel]})
    findAllHotels(@Query() pagination: PaginationDto){
        return this.hotelService.findAllHotels(pagination);
    }

    @Get('search')
    @ApiResponse({type: Hotel})
    findByName(@Query() hotelSearch: HotelSearchDto){ 
        return this.hotelService.findByCriteria(hotelSearch)
    }

    @Get('rooms')
    @ApiResponse({type: [Room]})
    findRooms(){
        return this.hotelService.findAllRooms()
    }

    @Get('search-rooms')
    @ApiResponse({type: [Room]})
    findAvailableRooms(@Query() hotelSearch: HotelSearchDto){
        return this.hotelService.getAvailableRoomTypes(hotelSearch)
    }

}
