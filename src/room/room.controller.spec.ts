import { Test, TestingModule } from '@nestjs/testing';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

class MockRoomRepository {}
class RoomFeatureMappingRepository {}

describe('RoomController', () => {
  let controller: RoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomController],
      providers: [
        RoomService,
        { provide: 'RoomRepository', useClass: MockRoomRepository },
        { provide: 'RoomFeatureMappingRepository', useClass: RoomFeatureMappingRepository },
        
      ],
    }).compile();

    controller = module.get<RoomController>(RoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
