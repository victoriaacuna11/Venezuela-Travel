import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristDestinationComponent } from './tourist-destination.component';

describe('TouristDestinationComponent', () => {
  let component: TouristDestinationComponent;
  let fixture: ComponentFixture<TouristDestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristDestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
