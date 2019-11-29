import { Injectable } from '@angular/core';
import { HotelFacilitie } from '../Models/hotelFacilitie';

@Injectable({
  providedIn: 'root'
})
export class HotelFacilitiesService {
  facilities: HotelFacilitie[];
  wifi:HotelFacilitie={
    "name": "Wifi",
    "available":true,
    "icon":"assets/img/wifi.png",
    "selected": false
  }
  gym:HotelFacilitie={
    "name":"Gimnasio",
    "available":true,
    "icon": "assets/img/gym.png",
    "selected": false
  }
  pool:HotelFacilitie={
    "name":"Piscina",
    "available":true,
    "icon": "assets/img/pool.png",
    "selected": false
  }
  roomService:HotelFacilitie={
    "name":"Servicio a la habitación",
    "available":true,
    "icon": "assets/img/roomservice.png",
    "selected": false
  }
  restaurant:HotelFacilitie={
    "name":"Restaurant",
    "available":true,
    "icon": "assets/img/restaurant.png",
    "selected": false
  }
  bar:HotelFacilitie={
    "name":"Bar",
    "available":true,
    "icon": "assets/img/bar.png",
    "selected": false
  }
  airConditioner:HotelFacilitie={
    "name":"Aire acondicionado",
    "available":true,
    "icon": "assets/img/airconditioner.png",
    "selected": false
  }
  spa:HotelFacilitie={
    "name":"Spa",
    "available":true,
    "icon": "assets/img/spa.png",
    "selected": false
  }
  pets:HotelFacilitie={
    "name":"Mascotas",
    "available":true,
    "icon": "assets/img/pets.png",
    "selected": false
  }
  tv:HotelFacilitie={
    "name":"TV",
    "available":true,
    "icon": "assets/img/tv.png",
    "selected": false
  }
  kitchen:HotelFacilitie={
    "name":"Cocina",
    "available":true,
    "icon": "assets/img/kitchen.png",
    "selected": false
  }
  snackBar:HotelFacilitie={
    "name":"Snack Bar",
    "available":true,
    "icon": "assets/img/snackbar.png",
    "selected": false
  }
  parking:HotelFacilitie={
    "name":"Estacionamiento",
    "available":true,
    "icon": "assets/img/parking.png",
    "selected": false
  }
  laundry:HotelFacilitie={
    "name":"Lavandería",
    "available":true,
    "icon": "assets/img/laundry.png",
    "selected": false
  }
  businessRoom:HotelFacilitie={
    "name":"Sala de negocios",
    "available":true,
    "icon": "assets/img/businessroom.png",
    "selected": false
  }
  traslado:HotelFacilitie={
    "name":"Traslado",
    "available":true,
    "icon": "assets/img/traslado.png",
    "selected": false
  }
  sports:HotelFacilitie={
    "name":"Canchas deportivas",
    "available":true,
    "icon": "assets/img/sports.png",
    "selected": false
  }
  
  constructor() { }

  getFacilities(){
    return [this.wifi,
    this.gym,
    this.pool,
    this.restaurant,
    this.pets,
    this.parking,
    this.snackBar,
    this.laundry,
    this.bar,
    this.tv,
    this.sports,
    this.traslado,
    this.spa,
    this.kitchen,
    this.airConditioner,
    this.roomService,
    this.businessRoom
  ]
  }

  // getWifi(){
  //   return this.wifi;
  // }
  // getGym(){
  //   return this.gym;
  // }
  // getRestaurant(){
  //   return this.restaurant;
  // }
  // getPool(){
  //   return this.pool;
  // }
  // getPets(){
  //   return this.pets;
  // }
  // getParking(){
  //   return this.parking;
  // }
  // getSnackBar(){
  //   return this.snackBar;
  // }
  // getLaundry(){
  //   return this.laundry;
  // }
  // getBar(){
  //   return this.bar;
  // }
  // getTV(){
  //   return this.tv;
  // }
  // getSports(){
  //   return this.sports;
  // }
  // getTraslado(){
  //   return this.traslado;
  // }
  // getBusinessRoom(){
  //   return this.businessRoom;
  // }
  // getRoomService(){
  //   return this.roomService;
  // }
  // getAirConditioner(){
  //   return this.airConditioner;
  // }
  // getKitchen(){
  //   return this.kitchen;
  // }
  // getSpa(){
  //   return this.spa;
  // }

}
