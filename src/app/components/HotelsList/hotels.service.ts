import { Injectable } from '@angular/core';
import { hotel } from 'src/app/components/HotelsList/hotel/hotel';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  btnR = false;
  hotels: hotel[] = [
    {name:'Pestana Caracas', 
    description: 'Hotel lujoso ubicado en el centro de Caracas. Todo el confort y atencion de lujo te esperan aquí, desde la piscina infinita hasta los 20 restaurantes.'
    , imgPrin: 'assets/imageHotels/pestanaCaracas.jpg'
    , amenitiesImg: this.gralAmenities(true, true, true, true, true, true, false, false), nrBusquedas:80, nrVentas:100},

    {name:'Hilton Caracas', description: 'Hotel clásico ubicado en las afueras de Caracas. Todo el confort y atencion de lujo te esperan aquí, así como la tradicion que nunca falta en las paredes de esta casa.'
    , imgPrin: 'assets/imageHotels/HiltonC.jpg'
    , amenitiesImg: this.gralAmenities(false, true, false, true, true, true, true, false), nrBusquedas:50, nrVentas:200},

    {name:'Sunsol Isla Caribe', description: 'Hotel ubicado en el corazón de Margarita. Playa privada, 4 piscinas, 3 restaurantes, 1 cancha de mini-golf y mucho más.'
    , imgPrin: 'assets/imageHotels/sunsolIC.jpg'
    , amenitiesImg: this.gralAmenities(true, true, false, true, true, false, false, true), nrBusquedas:40, nrVentas:300},

    {name:'Sunsol Punta Blanca', description: 'Hermoso hotel ubicado en la Isla de coche. Disfruta de esta hermosa isla y todo lo que Has para ofrecer, como buceo, motocross, y mucho más.'
    , imgPrin: 'assets/imageHotels/sunsolPB.jpeg'
    , amenitiesImg: this.gralAmenities(false, false, false, true, true, false, true, false), nrBusquedas:30, nrVentas:400},
  
    {name:'Hesperia Isla Margarita', description: 'Hotel de categoría 5 estrellas ubicado en Juan Griego, Isla de Margarita. Contamos con 3 restaurantes de lujo, una piscina, playa privada, y un campo de golf privado de 9 hoyos.'
    , imgPrin: 'assets/imageHotels/hesperiaIM.jpeg'
    , amenitiesImg: this.gralAmenities(true, true, false, true, true, true, true, true), nrBusquedas:100, nrVentas:500},
  
    {name:'Ara Merú Lodge', description: 'Hotel ubicado en Canaima. Vive la experiencia de un campamento exclusivo, con cabañas, restaurante, piscina; y por supuesto, excursiones al salto Angel, a ríos y a lagos, y mucho más.'
    , imgPrin: 'assets/imageHotels/araMeru.jpg'
    , amenitiesImg: this.gralAmenities(true, false, false, true, true, false, false, true), nrBusquedas:83, nrVentas:100},
  
    {name:'Islas del Sol', description: 'Lo mejor del estado Falcon en un solo hotel. En islas del Sol tendrás todo lo que necesitas; contamos con parque de agua, 8 piscinas, un mini-parque acuatico, restaurantes, habitaciones de todo tipo, incluso un mercado.'
    , imgPrin: 'assets/imageHotels/islasDelSol.jpg'
    , amenitiesImg: this.gralAmenities(true, true, true, true, true, true, true, true), nrBusquedas:5000, nrVentas:1000},
  
    {name:'Hotel Belensate', description: 'Hermoso hotel para disfrutar los Andes venezolanos a plenitud. Contamos con habitaciones muy bien equipadas, piscina con calefacción, jacuzzis, y restaurantes con chefs de la región que resaltan los sabores de Mérida cada día.'
    , imgPrin: 'assets/imageHotels/belensate.jpg'
    , amenitiesImg: this.gralAmenities(true, false, false, true, true, false, false, true), nrBusquedas:200, nrVentas:132},
  
    {name:'Selva Negra', description: 'Hotel 3 estrellas en la Colonia Tovar. Contamos con restaurante, piscina con calefacción, atención al huesped 24/7, habitaciones de lujo tipo cabaña.'
    , imgPrin: 'assets/imageHotels/selvaNegra.jpg'
    , amenitiesImg: this.gralAmenities(true, true, false, true, true, true, false, false), nrBusquedas:3, nrVentas:0},
  ]
  
  private messageSource = new BehaviorSubject<Array<hotel>>(this.hotels);
  private messageSource2 = new BehaviorSubject<boolean>(this.btnR);
  private initState = new BehaviorSubject<boolean>(false);

  currentMessage = this.messageSource.asObservable();
  currentMessage2 = this.messageSource2.asObservable();
  currentState = this.initState.asObservable();


  changeMessage(hotel: hotel[]){
    this.messageSource.next(hotel)
  }

  changeMessage2(x: boolean){
    this.messageSource2.next(x)
  }

  changeState(x: boolean){
    this.initState.next(x)
  }

  ImageArray = [];
  title = "HOTELES";

  constructor() { }
  

  rearrangeByViews(): hotel[]{
    this.hotels=this.hotels.filter(e => e.nrBusquedas>0)
    .sort(function(a,b) {
      return b.nrBusquedas-a.nrBusquedas;
    });
    
    return this.hotels;
  }

  rearrangeBySells(): hotel[]{
    this.hotels=this.hotels.filter(e => e.nrVentas>0)
    .sort(function(a,b) {
      return b.nrVentas-a.nrVentas;
    });
    return this.hotels;
  }

  initialList(): hotel[]{
    this.hotels = [
      {name:'Pestana Caracas', 
      description: 'Hotel lujoso ubicado en el centro de Caracas. Todo el confort y atencion de lujo te esperan aquí, desde la piscina infinita hasta los 20 restaurantes.'
      , imgPrin: 'assets/imageHotels/pestanaCaracas.jpg'
      , amenitiesImg: this.gralAmenities(true, true, true, true, true, true, false, false), nrBusquedas:80, nrVentas:100},
  
      {name:'Hilton Caracas', description: 'Hotel clásico ubicado en las afueras de Caracas. Todo el confort y atencion de lujo te esperan aquí, así como la tradicion que nunca falta en las paredes de esta casa.'
      , imgPrin: 'assets/imageHotels/HiltonC.jpg'
      , amenitiesImg: this.gralAmenities(false, true, false, true, true, true, true, false), nrBusquedas:50, nrVentas:200},
  
      {name:'Sunsol Isla Caribe', description: 'Hotel ubicado en el corazón de Margarita. Playa privada, 4 piscinas, 3 restaurantes, 1 cancha de mini-golf y mucho más.'
      , imgPrin: 'assets/imageHotels/sunsolIC.jpg'
      , amenitiesImg: this.gralAmenities(true, true, false, true, true, false, false, true), nrBusquedas:40, nrVentas:300},
  
      {name:'Sunsol Punta Blanca', description: 'Hermoso hotel ubicado en la Isla de coche. Disfruta de esta hermosa isla y todo lo que Has para ofrecer, como buceo, motocross, y mucho más.'
      , imgPrin: 'assets/imageHotels/sunsolPB.jpeg'
      , amenitiesImg: this.gralAmenities(false, false, false, true, true, false, true, false), nrBusquedas:30, nrVentas:400},
    
      {name:'Hesperia Isla Margarita', description: 'Hotel de categoría 5 estrellas ubicado en Juan Griego, Isla de Margarita. Contamos con 3 restaurantes de lujo, una piscina, playa privada, y un campo de golf privado de 9 hoyos.'
      , imgPrin: 'assets/imageHotels/hesperiaIM.jpeg'
      , amenitiesImg: this.gralAmenities(true, true, false, true, true, true, true, true), nrBusquedas:100, nrVentas:500},
    
      {name:'Ara Merú Lodge', description: 'Hotel ubicado en Canaima. Vive la experiencia de un campamento exclusivo, con cabañas, restaurante, piscina; y por supuesto, excursiones al salto Angel, a ríos y a lagos, y mucho más.'
      , imgPrin: 'assets/imageHotels/araMeru.jpg'
      , amenitiesImg: this.gralAmenities(true, false, false, true, true, false, false, true), nrBusquedas:83, nrVentas:100},
    
      {name:'Islas del Sol', description: 'Lo mejor del estado Falcon en un solo hotel. En islas del Sol tendrás todo lo que necesitas; contamos con parque de agua, 8 piscinas, un mini-parque acuatico, restaurantes, habitaciones de todo tipo, incluso un mercado.'
      , imgPrin: 'assets/imageHotels/islasDelSol.jpg'
      , amenitiesImg: this.gralAmenities(true, true, true, true, true, true, true, true), nrBusquedas:5000, nrVentas:1000},
    
      {name:'Hotel Belensate', description: 'Hermoso hotel para disfrutar los Andes venezolanos a plenitud. Contamos con habitaciones muy bien equipadas, piscina con calefacción, jacuzzis, y restaurantes con chefs de la región que resaltan los sabores de Mérida cada día.'
      , imgPrin: 'assets/imageHotels/belensate.jpg'
      , amenitiesImg: this.gralAmenities(true, false, false, true, true, false, false, true), nrBusquedas:200, nrVentas:132},
    
      {name:'Selva Negra', description: 'Hotel 3 estrellas en la Colonia Tovar. Contamos con restaurante, piscina con calefacción, atención al huesped 24/7, habitaciones de lujo tipo cabaña.'
      , imgPrin: 'assets/imageHotels/selvaNegra.jpg'
      , amenitiesImg: this.gralAmenities(true, true, false, true, true, true, false, false), nrBusquedas:3, nrVentas:0},
    ]

    return this.hotels;
  }



  gralAmenities(HasAC:boolean, HasBar:boolean, HasGym:boolean, HasPiscina:boolean, HasRestaurante:boolean, HasRoomService:boolean,
    HasSpa: boolean, HasWifi:boolean): String[]{
   
     this.ImageArray= [];
     if(HasAC){
       const icon = {icon: 'assets/icons/aC.png', msg: 'Aire acondicionado'}
       this.ImageArray.push(icon);
     };
     if(HasBar){
       const icon = {icon: 'assets/icons/bar.png', msg: 'Bar'}
       this.ImageArray.push(icon);
     };
     if(HasGym){
       const icon = {icon: 'assets/icons/gym.png', msg: 'Gym'}
       this.ImageArray.push(icon);
     };
     if(HasPiscina){
       const icon = {icon: 'assets/icons/piscina.png', msg: 'Piscina'}
       this.ImageArray.push(icon);
     };
     if(HasRestaurante){
       const icon = {icon: 'assets/icons/restaurante.png', msg: 'Restaurante'}
       this.ImageArray.push(icon);
     };
     if(HasRoomService){
       const icon = {icon: 'assets/icons/roomService.png', msg: 'Room Service'}
       this.ImageArray.push(icon);
     };
     if(HasSpa){
       const icon = {icon: 'assets/icons/spa.png', msg: 'Spa'}
       this.ImageArray.push(icon);
     };
     if(HasWifi){
       const icon = {icon: 'assets/icons/wifi.png', msg: 'Wifi'}
       this.ImageArray.push(icon);
     };
     
     return this.ImageArray;
   }
}
