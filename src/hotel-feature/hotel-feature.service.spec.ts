import { Test, TestingModule } from '@nestjs/testing';
import { HotelFeatureService } from './hotel-feature.service';

class MockHotelFeatureRepository {}

describe('HotelFeatureService', () => {
  let service: HotelFeatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HotelFeatureService,
          { provide: 'HotelFeatureRepository', useClass: MockHotelFeatureRepository },
      ],
    }).compile();

    service = module.get<HotelFeatureService>(HotelFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
