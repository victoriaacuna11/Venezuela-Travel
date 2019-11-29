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
import { StatesAdminComponent } from './components/admin/states-admin/states-admin.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ListStatesComponent } from './components/admin/list-states/list-states.component';
import { DestinationsAdminComponent } from './components/admin/destinations-admin/destinations-admin.component';
import { TDestinationsAdminComponent } from './components/admin/t-destinations-admin/t-destinations-admin.component';
import { ListTDestinationsComponent } from './components/admin/list-t-destinations/list-t-destinations.component';
import { ListDestinationsComponent } from './components/admin/list-destinations/list-destinations.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { HotelsAdminComponent } from './components/admin/hotels/hotels-admin/hotels-admin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { NavAdminComponent } from './components/admin/nav-admin/nav-admin.component';
import { PlaneaTuViajeComponent } from './components/planea-tu-viaje/planea-tu-viaje.component';
import { PlaneaPaso1Component } from './components/planea-paso1/planea-paso1.component';
import { PlaneaPaso3Component } from './components/planea-paso3/planea-paso3.component';
import { PlaneaPaso5Component } from './components/planea-paso5/planea-paso5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { RoomsAdminComponent } from './components/admin/hotels/rooms-admin/rooms-admin.component';
import { HotelsListComponent } from './components/admin/hotels/hotels-list/hotels-list.component';
import { RoomsListAdminComponent } from './components/admin/hotels/rooms-list-admin/rooms-list-admin.component';
import { IsAvailablePipe } from './Pipes/is-available.pipe';
import { LoaderComponent } from './components/loader/loader.component';
  
import { NgxPayPalModule } from 'ngx-paypal';
import { RevisarItinerarioComponent } from './components/revisar-itinerario/revisar-itinerario.component';
import { ItinerarioDetailsComponent } from './components/itinerario-details/itinerario-details.component';
import { AdminReservaComponent } from './components/admin/itinerario/admin-reserva/admin-reserva.component';
  

import { AuthService } from "./services/auth.service";

import { ReserveListComponent } from './components/admin/itinerario/reserve-list/reserve-list.component';


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
    RoomsListComponent,
    StatesAdminComponent,
    ListStatesComponent,
    DestinationsAdminComponent,
    TDestinationsAdminComponent,
    ListTDestinationsComponent,
    ListDestinationsComponent,
    SearchBarComponent,
    FilterPipe,
    HotelsAdminComponent,
    LoginComponent,
    AdminHomeComponent,
    NavAdminComponent,
    PlaneaTuViajeComponent,
    PlaneaPaso1Component,
    PlaneaPaso3Component,
    PlaneaPaso5Component,
    RoomsAdminComponent,
    HotelsListComponent,
    RoomsListAdminComponent,
    IsAvailablePipe,
    LoaderComponent,
    RevisarItinerarioComponent,
    ItinerarioDetailsComponent,
    AdminReservaComponent,
    ReserveListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    TooltipModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANIQhqTM9wbPj1EzaF-UPzjnWXJjggkso'
    }),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule, 
    MatMomentDateModule,
    NgxPayPalModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
