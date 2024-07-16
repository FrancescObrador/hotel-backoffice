import { Test, TestingModule } from '@nestjs/testing';
import { RoomService } from './room.service';

class MockRoomRepository{}
class RoomMediaRepository{}

xdescribe('RoomService', () => {
  let service: RoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RoomService,
        { provide: 'RoomRepository', useClass: MockRoomRepository },
        { provide: 'RoomMediaRepository', useClass: RoomMediaRepository },
      ],
    }).compile();

    service = module.get<RoomService>(RoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
