import { Injectable } from '@angular/core';
import { TouristDestination } from '../Models/touristDestination';

@Injectable({
  providedIn: 'root'
})
export class TouristDestinationsService {
  destinations:TouristDestination[]=[
    {"name": "Salto Ángel"},
    {"name": "Parque Nacional Canaima"},
    {"name": "Auyantepuy"}
  ];
  destination:TouristDestination={
    "name": "Salto Ángel",
    "description": "El Salto Ángel ('Kerepakupai Vená' en pemón, que significa «salto del lugar más profundo») es la cascada de agua más "+ 
    "alta del mundo, con una altura de 997m (807m de caída ininterrumpida), originada en el Auyantepuy.",
    "destinationsCategory": {
      "name": "Montaña"
    },
    "services":"En este regalo de Dios a la naturaleza, encontrarás interesantes plantas, animales, "+ 
    "algunas veces endémicos (únicos en el mundo), y personas con una cultura, arte y gastronomía ancestral",
    "activities":"Expediciones a pie, en helicóptero y en canoas.",
    "latitude":5.9500000,
    "longitude":-62.5000000,
    "state": {"name":"Bolívar"},
    "direction":"Se localiza en el Parque Nacional Canaima, Bolívar, Venezuela; un espacio natural protegido.",
    "city":"Canaima",
    "bannerImg": "assets/img/salto-angel.jpg"

  };
  constructor() { }

  getDestinations(){
    return this.destinations;
  }
  getDestination(){
    return this.destination;
  }
}
