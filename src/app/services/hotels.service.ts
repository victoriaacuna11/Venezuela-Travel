import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { BehaviorSubject } from 'rxjs';
import { StatesService } from './states.service';
import { HotelFacilitiesService } from './hotel-facilities.service';
import { HotelFacilitie } from '../Models/hotelFacilitie';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  
  hotelX: Hotel={
    "name":"Ara Merú Lodge",
    "description": "Hotel ubicado en Canaima. Vive la experiencia de un campamento exclusivo, con cabañas, restaurante, piscina; y por supuesto, excursiones al salto Angel, a ríos y a lagos, y mucho más.",
    "imgPrin":"",
    "nrBusquedas":83,
    "nrVentas":100,
    "bannerImg":"https://www.arameru.com/wp-content/uploads/2018/05/Arameru02.jpg",
    "id":"",
    "stars":5,
    "latitude":6.239770,
    "longitude":-62.850959,
    "direction":"Caserío Tururiwaipa, Sector Canaima Comunidad Indígena Kanaimo, 8001, Bolívar.",
    "state": {"name":"Bolívar"},
    "imgs":["https://q-cf.bstatic.com/images/hotel/max1280x900/125/125365291.jpg",
    "https://r-cf.bstatic.com/images/hotel/max1280x900/162/162700063.jpg",
    "https://q-cf.bstatic.com/images/hotel/max1280x900/151/151578893.jpg",
    "https://r-cf.bstatic.com/images/hotel/max1280x900/151/151578257.jpg",
    "https://q-cf.bstatic.com/images/hotel/max1280x900/148/148433857.jpg",
    "https://r-cf.bstatic.com/images/hotel/max1280x900/145/145162949.jpg",
    "https://q-cf.bstatic.com/images/hotel/max1280x900/144/144770494.jpg",
    "https://r-cf.bstatic.com/images/hotel/max1280x900/144/144770197.jpg",
    "https://q-cf.bstatic.com/images/hotel/max1280x900/145/145160379.jpg",
    "https://r-cf.bstatic.com/images/hotel/max1280x900/145/145156957.jpg",
    "https://q-cf.bstatic.com/images/hotel/max1280x900/125/125226266.jpg",
    "https://r-cf.bstatic.com/images/hotel/max1280x900/145/145154939.jpg"],
    "city":"Canaima",
    "fullday": {"available":true,
                "price":100},
    "services":[
      {
        "name": "Wifi",
        "available":true,
        "icon":"assets/img/wifi.png"
      },
      {"name":"Gimnasio",
      "available":true,
      "icon": "assets/img/gym.png"},
      {
        "name":"Piscina",
        "available":true,
        "icon": "assets/img/pool.png"
      },
      {
        "name":"Servicio a la habitación",
        "available":true,
        "icon": "assets/img/roomservice.png"
      },
      {
        "name":"Restaurant",
        "available":true,
        "icon": "assets/img/restaurant.png"
      },
      {
        "name":"Bar",
        "available":true,
        "icon": "assets/img/bar.png"
      },
      {
        "name":"Aire acondicionado",
        "available":true,
        "icon": "assets/img/airconditioner.png"
      },
      {
        "name":"Spa",
        "available":true,
        "icon": "assets/img/spa.png"
      },
      {
        "name":"Mascotas",
        "available":true,
        "icon": "assets/img/pets.png"
      },
      {
        "name":"TV",
        "available":true,
        "icon": "assets/img/tv.png"
      },
      {
        "name":"Cocina",
        "available":true,
        "icon": "assets/img/kitchen.png"
      },
      {
        "name":"Snack Bar",
        "available":true,
        "icon": "assets/img/snackbar.png"
      },
      {
        "name":"Estacionamiento",
        "available":true,
        "icon": "assets/img/parking.png"
      },
      {
        "name":"Lavandería",
        "available":true,
        "icon": "assets/img/laundry.png"
      },
      {
        "name":"Sala de negocios",
        "available":true,
        "icon": "assets/img/businessroom.png"
      },
      {
        "name":"Traslado",
        "available":true,
        "icon": "assets/img/traslado.png"
      },
      {
        "name":"Canchas deportivas",
        "available":true,
        "icon": "assets/img/sports.png"
      }
    ],
    "rooms":[{
      "name":"Suite Presidencial",
      "imgs":["https://r-cf.bstatic.com/xdata/images/hotel/max1024x768/142192288.jpg?k=d8709ba3403dbe0a2d3b431944ae8502e249e6565e905f0c2112202c10cd4fd7&o=",
              "https://r-cf.bstatic.com/xdata/images/hotel/max1024x768/142188041.jpg?k=580087de8967ad32024a4ef60ebbf6f3359686b894302b28735442cce939b0fd&o=",
              "https://q-cf.bstatic.com/xdata/images/hotel/max1024x768/142187141.jpg?k=0b0c18b38161b2e59c4f4c7fba1cca092905da4b1e15d38da1f49c50d4cab31f&o=",
              "https://q-cf.bstatic.com/xdata/images/hotel/max1024x768/142185819.jpg?k=c4f5ac471f22ead3b57c9df3ba82c9c50215aeca85df19c2d4ec5a9a9b9d2e2d&o=",
      ],
      "capacity":2,
      "services": [
        {
          "name":"Caja fuerte",
          "available": true,
          "icon": "assets/img/cajaFuerte.png"
        },
        {
          "name":"Teléfono",
          "available": true,
          "icon": "assets/img/phone.png"
        },
        {
          "name":"Sofa Cama",
          "available": true,
          "icon": "assets/img/sofaCama.png"
        },
        {
          "name": "Wifi",
          "available":true,
          "icon":"assets/img/wifi.png"
        },
        {
          "name":"TV",
          "available":true,
          "icon": "assets/img/tv.png"
        },
        {
          "name":"Aire acondicionado",
          "available":true,
          "icon": "assets/img/airconditioner.png"
        },
        {
          "name":"Cocina",
          "available":true,
          "icon": "assets/img/kitchen.png"
        },
        {
          "name":"Armario",
          "available": true,
          "icon": "assets/img/wardrobe.png"
        }
    ],
      "views": "Vista al jardín y a la montaña",
      "price":530
    },
    {
      "name":"Habitación doble grande",
      "imgs":["https://q-cf.bstatic.com/xdata/images/hotel/max1024x768/142775503.jpg?k=4de1e833e31222ddd24a28cf6e1c4b3a674a039d432846cb2cbe1667db3c6b95&o=",
        "https://r-cf.bstatic.com/xdata/images/hotel/max1024x768/142774792.jpg?k=e60cb79ae1eb577a2bdcd98999522e5b519083c7869609b5cd92b3ca7f9570e4&o=",
        "https://r-cf.bstatic.com/xdata/images/hotel/max1024x768/142774610.jpg?k=db49cc5f857602927700076c90f6a0ad533efba185396b4fac707d2b4a068497&o="
      ],
      "capacity":4,
      "services": [
        {
          "name":"Teléfono",
          "available": true,
          "icon": "assets/img/phone.png"
        },
        {
          "name":"Sofa Cama",
          "available": true,
          "icon": "assets/img/sofaCama.png"
        },
        {
          "name": "Wifi",
          "available":true,
          "icon":"assets/img/wifi.png"
        },
        {
          "name":"TV",
          "available":true,
          "icon": "assets/img/tv.png"
        },
        {
          "name":"Aire acondicionado",
          "available":true,
          "icon": "assets/img/airconditioner.png"
        },
        {
          "name":"Armario",
          "available": true,
          "icon": "assets/img/wardrobe.png"
        }
    ],
      "views": "Vista al jardín y a la montaña",
      "price":880
    },
    {
      "name":"Suite de dos dormitorios",
      "imgs":["https://r-cf.bstatic.com/xdata/images/hotel/max1024x768/142201480.jpg?k=3d3fc30f3ca8d96a2eb63e36d980fbb304f40ce350682afc207619503391b258&o=",
        "https://q-cf.bstatic.com/xdata/images/hotel/max1024x768/142199942.jpg?k=26c058ccfd5fe6c8dabf72d37696fad44581b4486c19abf5cbafa62878d0a845&o=",
        "https://r-cf.bstatic.com/xdata/images/hotel/max1024x768/142198564.jpg?k=9908df2def21e9669485d534bce3d7b2589b8ce4eaef046adeb283c7e57d1bee&o=",
        "https://q-cf.bstatic.com/xdata/images/hotel/max1024x768/142195753.jpg?k=a021e0eb3f918df76e6cfe9fb4c468dd048fac617a860c40544a27980c9d73d7&o="
      ],
      "capacity":6,
      "services": [
        {
          "name":"Caja fuerte",
          "available": true,
          "icon": "assets/img/cajaFuerte.png"
        },
        {
          "name":"Teléfono",
          "available": true,
          "icon": "assets/img/phone.png"
        },
        {
          "name":"Sofa Cama",
          "available": true,
          "icon": "assets/img/sofaCama.png"
        },
        {
          "name": "Wifi",
          "available":true,
          "icon":"assets/img/wifi.png"
        },
        {
          "name":"TV",
          "available":true,
          "icon": "assets/img/tv.png"
        },
        {
          "name":"Aire acondicionado",
          "available":true,
          "icon": "assets/img/airconditioner.png"
        },
        {
          "name":"Cocina",
          "available":true,
          "icon": "assets/img/kitchen.png"
        },
        {
          "name":"Armario",
          "available": true,
          "icon": "assets/img/wardrobe.png"
        }
    ],
      "views": "Vista al jardín y a la montaña",
      "price":1590
    }
  ]

  }
  btnR = false;
  hotels: Hotel[] = [
    {name:'Pestana Caracas', 
    description: 'Hotel lujoso ubicado en el centro de Caracas. Todo el confort y atencion de lujo te esperan aquí, desde la piscina infinita hasta los 20 restaurantes.'
    , imgPrin: 'assets/imageHotels/pestanaCaracas.jpg'
    ,  nrBusquedas:80, nrVentas:100,
    services: [
      {
        "name":"Teléfono",
        "available": true,
        "icon": "assets/img/phone.png"
      },
      {
        "name":"Sofa Cama",
        "available": true,
        "icon": "assets/img/sofaCama.png"
      },
      {
        "name": "Wifi",
        "available":true,
        "icon":"assets/img/wifi.png"
      },
      {
        "name":"TV",
        "available":true,
        "icon": "assets/img/tv.png"
      },
      {
        "name":"Aire acondicionado",
        "available":true,
        "icon": "assets/img/airconditioner.png"
      }
  ]},

    {name:'Hilton Caracas', description: 'Hotel clásico ubicado en las afueras de Caracas. Todo el confort y atencion de lujo te esperan aquí, así como la tradicion que nunca falta en las paredes de esta casa.'
    , imgPrin: 'assets/imageHotels/HiltonC.jpg'
    , nrBusquedas:50, nrVentas:200,
    services: [
      {
        "name":"Teléfono",
        "available": true,
        "icon": "assets/img/phone.png"
      },
      {
        "name":"Sofa Cama",
        "available": true,
        "icon": "assets/img/sofaCama.png"
      },
      {
        "name": "Wifi",
        "available":true,
        "icon":"assets/img/wifi.png"
      },
      {
        "name":"Aire acondicionado",
        "available":true,
        "icon": "assets/img/airconditioner.png"
      },
      {
        "name":"Armario",
        "available": true,
        "icon": "assets/img/wardrobe.png"
      }
  ]},

    {name:'Sunsol Isla Caribe', description: 'Hotel ubicado en el corazón de Margarita. Playa privada, 4 piscinas, 3 restaurantes, 1 cancha de mini-golf y mucho más.'
    , imgPrin: 'assets/imageHotels/sunsolIC.jpg'
    , nrBusquedas:40, nrVentas:300,
    services: [
      {
        "name":"Teléfono",
        "available": true,
        "icon": "assets/img/phone.png"
      },
      {
        "name":"Sofa Cama",
        "available": true,
        "icon": "assets/img/sofaCama.png"
      },
      {
        "name": "Wifi",
        "available":true,
        "icon":"assets/img/wifi.png"
      },
      {
        "name":"TV",
        "available":true,
        "icon": "assets/img/tv.png"
      },
      {
        "name":"Aire acondicionado",
        "available":true,
        "icon": "assets/img/airconditioner.png"
      },
      {
        "name":"Armario",
        "available": true,
        "icon": "assets/img/wardrobe.png"
      }
  ]},

    {name:'Sunsol Punta Blanca', description: 'Hermoso hotel ubicado en la Isla de coche. Disfruta de esta hermosa isla y todo lo que Has para ofrecer, como buceo, motocross, y mucho más.'
    , imgPrin: 'assets/imageHotels/sunsolPB.jpeg'
    , nrBusquedas:30, nrVentas:400,
    services: [
      {
        "name":"Teléfono",
        "available": true,
        "icon": "assets/img/phone.png"
      },
      {
        "name":"Sofa Cama",
        "available": true,
        "icon": "assets/img/sofaCama.png"
      },
      {
        "name": "Wifi",
        "available":true,
        "icon":"assets/img/wifi.png"
      },
      {
        "name":"TV",
        "available":true,
        "icon": "assets/tv.png"
      },
      {
        "name":"Aire acondicionado",
        "available":true,
        "icon": "assets/img/airconditioner.png"
      },
      {
        "name":"Armario",
        "available": true,
        "icon": "assets/img/wardrobe.png"
      }
  ]},
  
    {name:'Hesperia Isla Margarita', description: 'Hotel de categoría 5 estrellas ubicado en Juan Griego, Isla de Margarita. Contamos con 3 restaurantes de lujo, una piscina, playa privada, y un campo de golf privado de 9 hoyos.'
    , imgPrin: 'assets/imageHotels/hesperiaIM.jpeg'
    , nrBusquedas:100, nrVentas:500,
    services: [
      {
        "name":"Teléfono",
        "available": true,
        "icon": "assets/img/phone.png"
      },
      {
        "name":"Sofa Cama",
        "available": true,
        "icon": "assets/img/sofaCama.png"
      },
      {
        "name": "Wifi",
        "available":true,
        "icon":"assets/img/wifi.png"
      },
      {
        "name":"TV",
        "available":true,
        "icon": "assets/img/tv.png"
      },
      {
        "name":"Aire acondicionado",
        "available":true,
        "icon": "assets/img/airconditioner.png"
      },
      {
        "name":"Armario",
        "available": true,
        "icon": "assets/img/wardrobe.png"
      }
  ]},
  
    {name:'Ara Merú Lodge', description: 'Hotel ubicado en Canaima. Vive la experiencia de un campamento exclusivo, con cabañas, restaurante, piscina; y por supuesto, excursiones al salto Angel, a ríos y a lagos, y mucho más.'
    , imgPrin: 'assets/imageHotels/araMeru.jpg'
    , nrBusquedas:83, nrVentas:100,
    services: [
      {
        "name":"Teléfono",
        "available": true,
        "icon": "assets/img/phone.png"
      },
      {
        "name":"Sofa Cama",
        "available": true,
        "icon": "assets/img/sofaCama.png"
      },
      {
        "name": "Wifi",
        "available":true,
        "icon":"assets/img/wifi.png"
      },
      {
        "name":"TV",
        "available":true,
        "icon": "assets/img/tv.png"
      },
      {
        "name":"Aire acondicionado",
        "available":true,
        "icon": "assets/img/airconditioner.png"
      },
      {
        "name":"Armario",
        "available": true,
        "icon": "assets/img/wardrobe.png"
      }
  ]},
  
    {name:'Islas del Sol', description: 'Lo mejor del estado Falcon en un solo hotel. En islas del Sol tendrás todo lo que necesitas; contamos con parque de agua, 8 piscinas, un mini-parque acuatico, restaurantes, habitaciones de todo tipo, incluso un mercado.'
    , imgPrin: 'assets/imageHotels/islasDelSol.jpg'
    , nrBusquedas:5000, nrVentas:1000,
    services: [
      {
        "name":"Teléfono",
        "available": true,
        "icon": "assets/img/phone.png"
      },
      {
        "name":"Sofa Cama",
        "available": true,
        "icon": "assets/img/sofaCama.png"
      },
      {
        "name": "Wifi",
        "available":true,
        "icon":"assets/img/wifi.png"
      },
      {
        "name":"TV",
        "available":true,
        "icon": "assets/img/tv.png"
      },
      {
        "name":"Aire acondicionado",
        "available":true,
        "icon": "assets/img/airconditioner.png"
      },
      {
        "name":"Armario",
        "available": true,
        "icon": "assets/img/wardrobe.png"
      }
  ]},
  
    {name:'Hotel Belensate', description: 'Hermoso hotel para disfrutar los Andes venezolanos a plenitud. Contamos con habitaciones muy bien equipadas, piscina con calefacción, jacuzzis, y restaurantes con chefs de la región que resaltan los sabores de Mérida cada día.'
    , imgPrin: 'assets/imageHotels/belensate.jpg'
    , nrBusquedas:200, nrVentas:132,
    services: [
      {
        "name":"Teléfono",
        "available": true,
        "icon": "assets/img/phone.png"
      },
      {
        "name":"Sofa Cama",
        "available": true,
        "icon": "assets/img/sofaCama.png"
      },
      {
        "name": "Wifi",
        "available":true,
        "icon":"assets/img/wifi.png"
      },
      {
        "name":"TV",
        "available":true,
        "icon": "assets/img/tv.png"
      },
      {
        "name":"Aire acondicionado",
        "available":true,
        "icon": "assets/img/airconditioner.png"
      },
      {
        "name":"Armario",
        "available": true,
        "icon": "assets/img/wardrobe.png"
      }
  ]},
  
    {name:'Selva Negra', description: 'Hotel 3 estrellas en la Colonia Tovar. Contamos con restaurante, piscina con calefacción, atención al huesped 24/7, habitaciones de lujo tipo cabaña.'
    , imgPrin: 'assets/imageHotels/selvaNegra.jpg'
    , nrBusquedas:3, nrVentas:0,
    services: [
      {
        "name":"Teléfono",
        "available": true,
        "icon": "assets/img/phone.png"
      },
      {
        "name":"Sofa Cama",
        "available": true,
        "icon": "assets/img/sofaCama.png"
      },
      {
        "name": "Wifi",
        "available":true,
        "icon":"assets/img/wifi.png"
      },
      {
        "name":"TV",
        "available":true,
        "icon": "assets/img/tv.png"
      },
      {
        "name":"Aire acondicionado",
        "available":true,
        "icon": "assets/img/airconditioner.png"
      },
      {
        "name":"Armario",
        "available": true,
        "icon": "assets/img/wardrobe.png"
      }
  ]},
  ]
  
  private messageSource = new BehaviorSubject<Array<Hotel>>(this.hotels);
  private messageSource2 = new BehaviorSubject<boolean>(this.btnR);
  private initState = new BehaviorSubject<boolean>(false);

  currentMessage = this.messageSource.asObservable();
  currentMessage2 = this.messageSource2.asObservable();
  currentState = this.initState.asObservable();


  changeMessage(hotel: Hotel[]){
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

  constructor(private sv: HotelFacilitiesService) { }
  

  rearrangeByViews(): Hotel[]{
    this.hotels=this.hotels.filter(e => e.nrBusquedas>0)
    .sort(function(a,b) {
      return b.nrBusquedas-a.nrBusquedas;
    });
    
    return this.hotels;
  }

  rearrangeBySells(): Hotel[]{
    this.hotels=this.hotels.filter(e => e.nrVentas>0)
    .sort(function(a,b) {
      return b.nrVentas-a.nrVentas;
    });
    return this.hotels;
  }

  initialList(): Hotel[]{
    this.hotels = [
      {name:'Pestana Caracas', 
      description: 'Hotel lujoso ubicado en el centro de Caracas. Todo el confort y atencion de lujo te esperan aquí, desde la piscina infinita hasta los 20 restaurantes.'
      , imgPrin: 'assets/imageHotels/pestanaCaracas.jpg'
      , nrBusquedas:80, nrVentas:100},
  
      {name:'Hilton Caracas', description: 'Hotel clásico ubicado en las afueras de Caracas. Todo el confort y atencion de lujo te esperan aquí, así como la tradicion que nunca falta en las paredes de esta casa.'
      , imgPrin: 'assets/imageHotels/HiltonC.jpg'
      , nrBusquedas:50, nrVentas:200},
  
      {name:'Sunsol Isla Caribe', description: 'Hotel ubicado en el corazón de Margarita. Playa privada, 4 piscinas, 3 restaurantes, 1 cancha de mini-golf y mucho más.'
      , imgPrin: 'assets/imageHotels/sunsolIC.jpg'
      , nrBusquedas:40, nrVentas:300},
  
      {name:'Sunsol Punta Blanca', description: 'Hermoso hotel ubicado en la Isla de coche. Disfruta de esta hermosa isla y todo lo que Has para ofrecer, como buceo, motocross, y mucho más.'
      , imgPrin: 'assets/imageHotels/sunsolPB.jpeg'
      , nrBusquedas:30, nrVentas:400},
    
      {name:'Hesperia Isla Margarita', description: 'Hotel de categoría 5 estrellas ubicado en Juan Griego, Isla de Margarita. Contamos con 3 restaurantes de lujo, una piscina, playa privada, y un campo de golf privado de 9 hoyos.'
      , imgPrin: 'assets/imageHotels/hesperiaIM.jpeg'
      , nrBusquedas:100, nrVentas:500},
    
      {name:'Ara Merú Lodge', description: 'Hotel ubicado en Canaima. Vive la experiencia de un campamento exclusivo, con cabañas, restaurante, piscina; y por supuesto, excursiones al salto Angel, a ríos y a lagos, y mucho más.'
      , imgPrin: 'assets/imageHotels/araMeru.jpg'
      , nrBusquedas:83, nrVentas:100},
    
      {name:'Islas del Sol', description: 'Lo mejor del estado Falcon en un solo hotel. En islas del Sol tendrás todo lo que necesitas; contamos con parque de agua, 8 piscinas, un mini-parque acuatico, restaurantes, habitaciones de todo tipo, incluso un mercado.'
      , imgPrin: 'assets/imageHotels/islasDelSol.jpg'
      , nrBusquedas:5000, nrVentas:1000},
    
      {name:'Hotel Belensate', description: 'Hermoso hotel para disfrutar los Andes venezolanos a plenitud. Contamos con habitaciones muy bien equipadas, piscina con calefacción, jacuzzis, y restaurantes con chefs de la región que resaltan los sabores de Mérida cada día.'
      , imgPrin: 'assets/imageHotels/belensate.jpg'
      , nrBusquedas:200, nrVentas:132},
    
      {name:'Selva Negra', description: 'Hotel 3 estrellas en la Colonia Tovar. Contamos con restaurante, piscina con calefacción, atención al huesped 24/7, habitaciones de lujo tipo cabaña.'
      , imgPrin: 'assets/imageHotels/selvaNegra.jpg'
      , nrBusquedas:3, nrVentas:0},
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

   getHotelX(){
     return this.hotelX;
   }


}
