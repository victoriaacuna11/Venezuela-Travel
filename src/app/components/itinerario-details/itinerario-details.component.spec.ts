import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarioDetailsComponent } from './itinerario-details.component';

describe('ItinerarioDetailsComponent', () => {
  let component: ItinerarioDetailsComponent;
  let fixture: ComponentFixture<ItinerarioDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItinerarioDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerarioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
