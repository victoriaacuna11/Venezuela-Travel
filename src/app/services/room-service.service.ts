import { Injectable } from '@angular/core';
import { RoomService } from '../Models/roomService';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor() { }

  cajaFuerte:RoomService={
    "name":"Caja fuerte",
    "available": true,
    "icon": "assets/img/cajaFuerte.png"
  }
  phone:RoomService={
    "name":"Teléfono",
    "available": true,
    "icon": "assets/img/phone.png"
  }
  sofaCama:RoomService={
    "name":"Sofa Cama",
    "available": true,
    "icon": "assets/img/sofaCama.png"
  }
  wifi:RoomService={
    "name": "Wifi",
    "available":true,
    "icon":"assets/img/wifi.png"
  }
  tv:RoomService={
    "name":"TV",
    "available":true,
    "icon": "assets/tv.png"
  }
  airConditioner:RoomService={
    "name":"Aire acondicionado",
    "available":true,
    "icon": "assets/airconditioner.png"
  }
  kitchen:RoomService={
    "name":"Cocina",
    "available":true,
    "icon": "assets/kitchen.png"
  }
  wardrobe:RoomService={
    "name":"Armario",
    "available": true,
    "icon": "assets/img/wardrobe.png"
  }
}
