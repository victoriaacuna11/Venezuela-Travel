import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsListAdminComponent } from './rooms-list-admin.component';

describe('RoomsListAdminComponent', () => {
  let component: RoomsListAdminComponent;
  let fixture: ComponentFixture<RoomsListAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsListAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
