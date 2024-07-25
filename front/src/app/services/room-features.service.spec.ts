import { TestBed } from '@angular/core/testing';

import { RoomFeaturesService } from './room-features.service';

describe('RoomFeaturesService', () => {
  let service: RoomFeaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomFeaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
