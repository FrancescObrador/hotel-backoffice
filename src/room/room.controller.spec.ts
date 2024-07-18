import { Test, TestingModule } from '@nestjs/testing';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

// Mock classes for dependencies
class MockRoomRepository {}
class MockRoomFeatureMappingRepository {}
class MockRoomMediaRepository {}
class MockRoomTypeRepository {}

describe('RoomController', () => {
  let controller: RoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomController],
      providers: [
        RoomService,
        { provide: 'RoomRepository', useClass: MockRoomRepository },
        { provide: 'RoomFeatureMappingRepository', useClass: MockRoomFeatureMappingRepository },
        { provide: 'RoomMediaRepository', useClass: MockRoomMediaRepository },
        { provide: 'RoomTypeRepository', useClass: MockRoomTypeRepository },
        
      ],
    }).compile();

    controller = module.get<RoomController>(RoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
