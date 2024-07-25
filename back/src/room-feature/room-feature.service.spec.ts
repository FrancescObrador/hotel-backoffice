import { Test, TestingModule } from '@nestjs/testing';
import { RoomFeatureService } from './room-feature.service';

class MockRoomFeatureRepository {}

describe('RoomFeatureService', () => {
  let service: RoomFeatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomFeatureService,
        { provide: 'RoomFeatureRepository', useClass: MockRoomFeatureRepository },
      ],
    }).compile();

    service = module.get<RoomFeatureService>(RoomFeatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
