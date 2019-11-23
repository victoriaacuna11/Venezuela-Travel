import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneaPaso5Component } from './planea-paso5.component';

describe('PlaneaPaso5Component', () => {
  let component: PlaneaPaso5Component;
  let fixture: ComponentFixture<PlaneaPaso5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneaPaso5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneaPaso5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
