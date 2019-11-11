import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelXComponent } from './hotel-x.component';

describe('HotelXComponent', () => {
  let component: HotelXComponent;
  let fixture: ComponentFixture<HotelXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
