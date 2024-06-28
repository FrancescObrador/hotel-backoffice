import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Hotel } from './entities/hotel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/common/dtos/pagination.dto';
import { HotelSearchDto } from './dtos/hotel-search.dto';
import { Booking, Room, RoomType } from './entities';

@Injectable()
export class HotelService {

    private readonly logger = new Logger('HotelServe')
    constructor(
        @InjectRepository(Hotel)
        private readonly hotelRepo: Repository<Hotel>,
        @InjectRepository(Room)
        private readonly roomRepo: Repository<Room>,
        @InjectRepository(RoomType)
        private readonly roomTypeRepo: Repository<RoomType>,
    ){}

    async findAllHotels(pagination: PaginationDto){
        const hotels = await this.hotelRepo.find()
        return hotels;
    } 

    async findByCriteria(hotelSearch: HotelSearchDto){
        const query = this.hotelRepo.createQueryBuilder('hotel');

        if (hotelSearch.name) {
        query.where('LOWER(hotel.name) LIKE LOWER(:name)', { name: `%${hotelSearch.name}%` });
        }
        
        if (hotelSearch.address) {
        query.andWhere('LOWER(hotel.address) Like LOWER(:address)', {address: `%${hotelSearch.address}%`});
        }

        if(hotelSearch.limit){
            query.take(hotelSearch.limit)
        }

        return await query.getMany();
    }

    //Funcion de busqueda por ubicación

    // Funcion de busqueda por hotel concreto + fechas de reserva + numero de personas
    async getAvailableRoomTypes(hotelSearchDto: HotelSearchDto){ 
        
        
        try {
            let checkInDate = new Date(hotelSearchDto.checkInDate) //2024-07-01 
            let checkOutDate = new Date(hotelSearchDto.checkOutDate) // 2024-07-10
    
            let hotelId = 1
            const { numberOfPeople = 1 } = hotelSearchDto
    
    
            
            const availableRoomTypes = await this.roomTypeRepo
            .createQueryBuilder('roomType')
            .innerJoin('roomType.rooms', 'room', 'room.hotel_id = :hotelId')
            .leftJoinAndSelect(
              'Booking',
              'booking',
              'booking.room_id = room.id AND booking.checkInDate <= :checkOutDate AND booking.checkOutDate >= :checkInDate',
              { checkOutDate, checkInDate },
            )
            .where('roomType.hotel_id = :hotelId', { hotelId })
            .andWhere('roomType.capacity >= :numberOfPeople', { numberOfPeople })
            .andWhere('booking.id IS NULL')
            .getMany();
    
            return availableRoomTypes

        } catch (error) {
            this.handleExceptions(error)
        }
        
    }
    
    
    // Rooms Data
    async findAllRooms(){
        return this.roomRepo.find()
    }

    private handleExceptions(error: any){
        if(error.code === '23505'){
          throw new BadRequestException(error.detail)
        }
        this.logger.error(error)
        throw new InternalServerErrorException('Unexpected error, chceck server logs')
    }
}
