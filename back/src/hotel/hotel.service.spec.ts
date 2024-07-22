import { Test, TestingModule } from '@nestjs/testing';
import { HotelService } from './hotel.service';

class MockHotelRepository{}
class MockHotelFeatureMappingRepository{}
class MockHotelMediaRepository{}

describe('HotelService', () => {
  let service: HotelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HotelService,
        { provide: 'HotelRepository', useClass: MockHotelRepository },
        { provide: 'HotelFeatureMappingRepository', useClass: MockHotelFeatureMappingRepository },
        { provide: 'HotelMediaRepository', useClass: MockHotelMediaRepository },
      ],
    }).compile();

    service = module.get<HotelService>(HotelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
