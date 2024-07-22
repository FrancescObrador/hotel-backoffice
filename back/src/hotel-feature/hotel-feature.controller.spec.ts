import { Test, TestingModule } from '@nestjs/testing';
import { HotelFeatureController } from './hotel-feature.controller';
import { HotelFeatureService } from './hotel-feature.service';

class MockHotelFeatureRepository {}

describe('HotelFeatureController', () => {
  let controller: HotelFeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelFeatureController],
      providers: [
        HotelFeatureService,
        { provide: 'HotelFeatureRepository', useClass: MockHotelFeatureRepository },
      ],
    }).compile();

    controller = module.get<HotelFeatureController>(HotelFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
