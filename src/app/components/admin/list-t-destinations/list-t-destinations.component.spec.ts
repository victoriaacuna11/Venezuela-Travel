import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTDestinationsComponent } from './list-t-destinations.component';

describe('ListTDestinationsComponent', () => {
  let component: ListTDestinationsComponent;
  let fixture: ComponentFixture<ListTDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
