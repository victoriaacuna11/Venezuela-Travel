import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarItinerarioComponent } from './revisar-itinerario.component';

describe('RevisarItinerarioComponent', () => {
  let component: RevisarItinerarioComponent;
  let fixture: ComponentFixture<RevisarItinerarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisarItinerarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
