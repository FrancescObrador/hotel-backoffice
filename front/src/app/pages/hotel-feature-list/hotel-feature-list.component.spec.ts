import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFeatureListComponent } from './hotel-feature-list.component';

describe('HotelFeatureListComponent', () => {
  let component: HotelFeatureListComponent;
  let fixture: ComponentFixture<HotelFeatureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelFeatureListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
