import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestsAndStatesComponent } from './dests-and-states.component';

describe('DestsAndStatesComponent', () => {
  let component: DestsAndStatesComponent;
  let fixture: ComponentFixture<DestsAndStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestsAndStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestsAndStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
