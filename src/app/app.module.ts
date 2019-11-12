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
import { BarComponent } from './components/bar/bar.component';
import { FiltroComponent } from './components/HotelsList/filtro/filtro.component';
import { HeaderComponent } from './components/HotelsList/header/header.component';
import { HotelComponent } from './components/HotelsList/hotel/hotel.component';
import { MenuComponent } from './components/menu/menu.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { FooterComponent } from './components/footer/footer.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { StatesComponent } from './components/states/states.component';
import { Routes, RouterModule } from '@angular/router';
import { TouristDestinationComponent } from './components/tourist-destination/tourist-destination.component';
import { AgmCoreModule } from '@agm/core';
import { HotelXComponent } from './components/hotel-x/hotel-x.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.prod';
import { BannerImgComponent } from './components/banner-img/banner-img.component';
import { DestsAndStatesComponent } from './components/dests-and-states/dests-and-states.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';

const appRoutes: Routes=[

];


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
    MenuComponent,
    FooterComponent,
    DestinationsComponent,
    StatesComponent,
    TouristDestinationComponent,
    HotelXComponent,
    BannerImgComponent,
    DestsAndStatesComponent,
    RoomsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    TooltipModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
