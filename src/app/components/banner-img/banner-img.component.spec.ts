import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerImgComponent } from './banner-img.component';

describe('BannerImgComponent', () => {
  let component: BannerImgComponent;
  let fixture: ComponentFixture<BannerImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
