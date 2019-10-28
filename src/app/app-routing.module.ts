import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { StatesComponent } from './components/states/states.component';
import { BannerHomePageComponent } from './components/HomePage/banner-home-page/banner-home-page.component';
import { TouristInfoComponent } from './components/TouristInfo/tourist-info/tourist-info.component';
import { HotelComponent } from './components/HotelsList/hotel/hotel.component';


const routes: Routes = [
  {path : 'destinos', component: DestinationsComponent},
  {path : 'estados', component: StatesComponent},
  {path : 'estados/:destinoPrueba', component: StatesComponent},
  {path : '', component: BannerHomePageComponent},
  {path : 'infoTuristica', component: TouristInfoComponent },
  {path : 'hoteles', component: HotelComponent },
  {path : 'infoestado', component: TouristInfoComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
