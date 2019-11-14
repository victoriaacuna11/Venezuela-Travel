import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { StatesComponent } from './components/states/states.component';
import { BannerHomePageComponent } from './components/HomePage/banner-home-page/banner-home-page.component';
import { TouristInfoComponent } from './components/TouristInfo/tourist-info/tourist-info.component';
import { HotelComponent } from './components/HotelsList/hotel/hotel.component';
import { TouristDestinationComponent } from './components/tourist-destination/tourist-destination.component';
import { HotelXComponent } from './components/hotel-x/hotel-x.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { StatesAdminComponent } from './components/admin/states-admin/states-admin.component';
import { ListStatesComponent } from './components/admin/list-states/list-states.component';
import { TDestinationsAdminComponent } from './components/admin/t-destinations-admin/t-destinations-admin.component';
import { ListTDestinationsComponent } from './components/admin/list-t-destinations/list-t-destinations.component';
import { DestinationsAdminComponent } from './components/admin/destinations-admin/destinations-admin.component';
import { ListDestinationsComponent } from './components/admin/list-destinations/list-destinations.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path : 'destinos', component: DestinationsComponent},
  {path : 'estados', component: StatesComponent},
  {path : 'estados/:destinoPrueba', component: StatesComponent},
  {path : '', component: BannerHomePageComponent},
  {path : 'infoTuristica', component: TouristInfoComponent },
  {path : 'hoteles', component: HotelComponent },
  {path : 'infoestado', component: TouristInfoComponent},
  {path: 'destination/info/:id', component: TouristDestinationComponent},
  {path: 'hotelx', component: HotelXComponent},
  {path: 'roomList', component: RoomsListComponent},
  {path: 'adminEdo', component: StatesAdminComponent},
  {path: 'stateList', component: ListStatesComponent},
  {path: 'info/:id', component: TouristInfoComponent},
  {path: 'adminTD', component: TDestinationsAdminComponent},
  {path: 'TDList', component: ListTDestinationsComponent},
  {path: 'admin/destination/add', component: DestinationsAdminComponent},
  {path: 'admin/destinations', component: ListDestinationsComponent},
  {path: 'login', component: LoginComponent},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
