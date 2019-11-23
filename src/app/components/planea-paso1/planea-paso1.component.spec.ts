import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneaPaso1Component } from './planea-paso1.component';

describe('PlaneaPaso1Component', () => {
  let component: PlaneaPaso1Component;
  let fixture: ComponentFixture<PlaneaPaso1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneaPaso1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneaPaso1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
