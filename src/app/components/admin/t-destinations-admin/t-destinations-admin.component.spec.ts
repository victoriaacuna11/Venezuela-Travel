import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TDestinationsAdminComponent } from './t-destinations-admin.component';

describe('TDestinationsAdminComponent', () => {
  let component: TDestinationsAdminComponent;
  let fixture: ComponentFixture<TDestinationsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDestinationsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDestinationsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
