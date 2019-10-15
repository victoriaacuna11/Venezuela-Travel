import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeOfferSecondComponent } from './what-we-offer-second.component';

describe('WhatWeOfferSecondComponent', () => {
  let component: WhatWeOfferSecondComponent;
  let fixture: ComponentFixture<WhatWeOfferSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatWeOfferSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatWeOfferSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
