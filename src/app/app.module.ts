import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerHomePageComponent } from './components/HomePage/banner-home-page/banner-home-page.component';
import { WhatWeOfferComponent } from './components/HomePage/what-we-offer/what-we-offer.component';
import { WhatWeOfferSecondComponent } from './components/HomePage/what-we-offer-second/what-we-offer-second.component';
import { MenuDesktopComponent } from './components/HomePage/menu-desktop/menu-desktop.component';
import { TouristInfoComponent } from './components/TouristInfo/tourist-info/tourist-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerHomePageComponent,
    WhatWeOfferComponent,
    WhatWeOfferSecondComponent,
    MenuDesktopComponent,
    TouristInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
