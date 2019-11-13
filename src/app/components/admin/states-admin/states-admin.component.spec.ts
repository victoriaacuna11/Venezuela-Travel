import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesAdminComponent } from './states-admin.component';

describe('StatesAdminComponent', () => {
  let component: StatesAdminComponent;
  let fixture: ComponentFixture<StatesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
