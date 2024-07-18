import { Test, TestingModule } from '@nestjs/testing';
import { RoomService } from './room.service';

// Mock classes for dependencies
class MockRoomRepository {}
class MockRoomMediaRepository {}
class MockRoomFeatureMappingRepository {}
class MockRoomTypeRepository {}

describe('RoomService', () => {
  let service: RoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomService,
        { provide: 'RoomRepository', useClass: MockRoomRepository },
        { provide: 'RoomMediaRepository', useClass: MockRoomMediaRepository },
        { provide: 'RoomFeatureMappingRepository', useClass: MockRoomFeatureMappingRepository },
        { provide: 'RoomTypeRepository', useClass: MockRoomTypeRepository },
      ],
    }).compile();

    service = module.get<RoomService>(RoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
