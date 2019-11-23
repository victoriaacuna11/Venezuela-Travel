import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneaPaso3Component } from './planea-paso3.component';

describe('PlaneaPaso3Component', () => {
  let component: PlaneaPaso3Component;
  let fixture: ComponentFixture<PlaneaPaso3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneaPaso3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneaPaso3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
