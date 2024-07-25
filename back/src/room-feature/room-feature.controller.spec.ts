import { Test, TestingModule } from '@nestjs/testing';
import { RoomFeatureController } from './room-feature.controller';
import { RoomFeatureService } from './room-feature.service';

class MockRoomFeatureRepository {}

describe('RoomFeatureController', () => {
  let controller: RoomFeatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomFeatureController],
      providers: [
        RoomFeatureService,
        { provide: 'RoomFeatureRepository', useClass: MockRoomFeatureRepository },
      ],
    }).compile();

    controller = module.get<RoomFeatureController>(RoomFeatureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
