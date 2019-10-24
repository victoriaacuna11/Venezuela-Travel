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
import { BarComponent } from './components/HotelsList/bar/bar.component';
import { FiltroComponent } from './components/HotelsList/filtro/filtro.component';
import { HeaderComponent } from './components/HotelsList/header/header.component';
import { HotelComponent } from './components/HotelsList/hotel/hotel.component';
import { MenuComponent } from './components/HotelsList/menu/menu.component';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerHomePageComponent,
    WhatWeOfferComponent,
    WhatWeOfferSecondComponent,
    MenuDesktopComponent,
    TouristInfoComponent,
    BarComponent,
    FiltroComponent,
    HeaderComponent,
    HotelComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
