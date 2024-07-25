import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomFeatureListComponent } from './room-feature-list.component';

describe('RoomFeatureListComponent', () => {
  let component: RoomFeatureListComponent;
  let fixture: ComponentFixture<RoomFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomFeatureListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
