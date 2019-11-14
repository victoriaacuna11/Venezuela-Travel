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
    "icon":"assets/img/wifi.png"
  }
  gym:HotelFacilitie={
    "name":"Gimnasio",
    "available":true,
    "icon": "assets/img/gym.png"
  }
  pool:HotelFacilitie={
    "name":"Piscina",
    "available":true,
    "icon": "assets/img/pool.png"
  }
  roomService:HotelFacilitie={
    "name":"Servicio a la habitación",
    "available":true,
    "icon": "assets/img/roomservice.png"
  }
  restaurant:HotelFacilitie={
    "name":"Restaurant",
    "available":true,
    "icon": "assets/img/restaurant.png"
  }
  bar:HotelFacilitie={
    "name":"Bar",
    "available":true,
    "icon": "assets/img/bar.png"
  }
  airConditioner:HotelFacilitie={
    "name":"Aire acondicionado",
    "available":true,
    "icon": "assets/img/airconditioner.png"
  }
  spa:HotelFacilitie={
    "name":"Spa",
    "available":true,
    "icon": "assets/img/spa.png"
  }
  pets:HotelFacilitie={
    "name":"Mascotas",
    "available":true,
    "icon": "assets/img/pets.png"
  }
  tv:HotelFacilitie={
    "name":"TV",
    "available":true,
    "icon": "assets/img/tv.png"
  }
  kitchen:HotelFacilitie={
    "name":"Cocina",
    "available":true,
    "icon": "assets/img/kitchen.png"
  }
  snackBar:HotelFacilitie={
    "name":"Snack Bar",
    "available":true,
    "icon": "assets/img/snackbar.png"
  }
  parking:HotelFacilitie={
    "name":"Estacionamiento",
    "available":true,
    "icon": "assets/img/parking.png"
  }
  laundry:HotelFacilitie={
    "name":"Lavandería",
    "available":true,
    "icon": "assets/limg/aundry.png"
  }
  businessRoom:HotelFacilitie={
    "name":"Sala de negocios",
    "available":true,
    "icon": "assets/img/businessroom.png"
  }
  traslado:HotelFacilitie={
    "name":"Traslado",
    "available":true,
    "icon": "assets/img/traslado.png"
  }
  sports:HotelFacilitie={
    "name":"Canchas deportivas",
    "available":true,
    "icon": "assets/img/sports.png"
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
