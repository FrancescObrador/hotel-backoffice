import { Test, TestingModule } from '@nestjs/testing';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { RoomService } from '../room/room.service';
import { Hotel } from './entities/hotel.entity';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { PaginationDto } from '../common/common/dtos/pagination.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { AddHotelFeatureDto } from './dto/create-hotel-feature-mapping';
import { CreateHotelMediaDto } from './dto/create-hotel-media.dto';
import { HotelFeature } from './entities/hotel-feature.entity';
import { HotelMedia } from './entities/hotel-media.entity';

// Mock classes for dependencies
class MockHotelRepository {}
class MockHotelFeatureMappingRepository {}
class MockHotelMediaRepository {}
class MockRoomRepository {}
class RoomFeatureMappingRepository {}
class RoomMediaRepository {}

// Mock data
const mockHotels: Hotel[] = [
  { id: 1, name: 'Hotel One', address: 'Location One', phone: '123', email: 'hotel1@hotel.com', stars: 4 },
  { id: 2, name: 'Hotel Two', address: 'Location Two', phone: '456', email: 'hotel2@hotel.com', stars: 5 },
];

describe('HotelController', () => {
  let controller: HotelController;
  let hotelService: HotelService;
  let roomService: RoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelController],
      providers: [
        HotelService,
        RoomService,
        { provide: 'HotelRepository', useClass: MockHotelRepository },
        { provide: 'HotelFeatureMappingRepository', useClass: MockHotelFeatureMappingRepository },
        { provide: 'HotelMediaRepository', useClass: MockHotelMediaRepository },
        { provide: 'RoomRepository', useClass: MockRoomRepository },
        { provide: 'RoomFeatureMappingRepository', useClass: RoomFeatureMappingRepository },
        { provide: 'RoomMediaRepository', useClass: RoomMediaRepository },
        
      ],
    }).compile();

    controller = module.get<HotelController>(HotelController);
    hotelService = module.get<HotelService>(HotelService);
    roomService = module.get<RoomService>(RoomService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should create a new valid hotel', async () => {
    const newHotel: CreateHotelDto = { name: 'Hotel Two', address: 'Location Two', phone: '456', email: 'hotel2@hotel.com', stars: 5 };
    const insertResult: InsertResult = new InsertResult();
    insertResult.identifiers.push({})
    jest.spyOn(hotelService, 'create').mockResolvedValue(insertResult);

    const result = await controller.create(newHotel);

    expect(result).toEqual({success: true});
  });

  it('should throw an error when creating a hotel with invalid data', async () => {
    const newHotel: CreateHotelDto = { name: '', address: '', phone: '', email: 'invalid-email', stars: 10 }; // Invalid data
    jest.spyOn(hotelService, 'create').mockImplementation(() => {
      throw new Error('Invalid data');
    });

    await expect(controller.create(newHotel)).rejects.toThrow('Invalid data');
  });

  it('should return an array of hotels', async () => {
    jest.spyOn(hotelService, 'findAll').mockResolvedValue(mockHotels);
    const pagination = new PaginationDto();
    const result: Hotel[] = await controller.findAll(pagination);

    expect(result).toEqual(mockHotels);
  });

  it('Should return one hotel given an id', async () => {
    const hotelId: number = 0;
    const foundHotel: Hotel = mockHotels.find( (hotel) => hotel.id === hotelId );
    jest.spyOn(hotelService, 'findOne').mockResolvedValue(foundHotel);

    const result: Hotel = await controller.findOne(hotelId.toString());

    expect(result).toEqual(foundHotel);
  });

  it('should return null when finding a non-existent hotel', async () => {
    const hotelId: number = 999;
    jest.spyOn(hotelService, 'findOne').mockResolvedValue(null);

    const result: Hotel = await controller.findOne(hotelId.toString());

    expect(result).toBeNull();
  });

  it('Should update an existing hotel', async () => {
    const hotelId: number = 1;
    const newHotel: UpdateHotelDto = { phone: '789', stars: 4 };
    const updateResult: UpdateResult = new UpdateResult();
    updateResult.affected = 1
    jest.spyOn(hotelService, 'update').mockResolvedValue(updateResult);

    const result = await controller.update(hotelId.toString(), newHotel);

    expect(result).toEqual({success: true});
  });

  it('Should delete an existing hotel', async () => {
    const hotelId: number = 1;
    
    const deleteResult: DeleteResult = new DeleteResult();
    deleteResult.affected = 1
    jest.spyOn(hotelService, 'delete').mockResolvedValue(deleteResult);

    const result = await controller.delete(hotelId.toString());
    
    expect(result).toEqual({ affected: 1 });
  });

  it('should return rooms for a hotel by ID', async () => {
    const hotelId = '1';
    const rooms = [{ id: 1, name: 'Room One' }, { id: 2, name: 'Room Two' }];

    jest.spyOn(hotelService, 'findOne').mockResolvedValue(mockHotels[0]);
    jest.spyOn(roomService, 'findByHotel').mockResolvedValue(rooms);

    const result = await controller.getRooms(hotelId);

    expect(result).toEqual(rooms);
    expect(hotelService.findOne).toHaveBeenCalledWith(1);
    expect(roomService.findByHotel).toHaveBeenCalledWith(hotelId);
  });

  it('should return features for a hotel by ID', async () => {
    const hotelId = '1';
    const features: HotelFeature[] = [{id: 1, name: 'Wi-Fi', description: 'Lorem ipsum'}]
    jest.spyOn(hotelService, 'getFeatures').mockResolvedValue(features);

    const result = await controller.getFeatures(hotelId);

    expect(result).toEqual(features);
    expect(hotelService.getFeatures).toHaveBeenCalledWith(1);
  });

  it('should add a feature to a hotel', async () => {
    const addFeatureDto: AddHotelFeatureDto = { id: 1, hotelId: 1, featureId: 1 };

    jest.spyOn(hotelService, 'addHotelFeature').mockResolvedValue({ success: true });

    const result = await controller.addFeatureToHotel(addFeatureDto);

    expect(result).toEqual({ success: true });
    expect(hotelService.addHotelFeature).toHaveBeenCalledWith(addFeatureDto);
  });

  it('should return media for a hotel by ID', async () => {
    const hotelId = '1';
    const media: HotelMedia[] = [{ id: 1, url: 'http://example.com/image1.jpg', hotel: new Hotel()}, { id: 2, url: 'http://example.com/image2.jpg', hotel: new Hotel()}];

    jest.spyOn(hotelService, 'getMedia').mockResolvedValue(media);

    const result = await controller.getHotelMedia(hotelId);

    expect(result).toEqual(media);
    expect(hotelService.getMedia).toHaveBeenCalledWith(1);
  });

  it('should add media to a hotel by ID', async () => {
    const hotelId = 1;
    const createHotelMediaDto: CreateHotelMediaDto = { hotelId, url: 'http://example.com/image.jpg' };

    jest.spyOn(hotelService, 'createHotelMedia').mockResolvedValue({ id: 1, ...createHotelMediaDto });

    const result = await controller.addMediaToHotel(createHotelMediaDto);

    expect(result).toEqual({ id: 1, ...createHotelMediaDto });
    expect(hotelService.createHotelMedia).toHaveBeenCalledWith({ ...createHotelMediaDto, hotelId });
  });

  it('should delete media from a hotel by hotel ID and media ID', async () => {
    const hotelId = '1';
    const mediaId = '2';

    jest.spyOn(hotelService, 'removeMedia').mockResolvedValue({ affected: 1 });

    const result = await controller.deleteMedia(hotelId, mediaId);

    expect(result).toEqual({ affected: 1 });
    expect(hotelService.removeMedia).toHaveBeenCalledWith(1, 2);
  });
});
