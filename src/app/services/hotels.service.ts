import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { BehaviorSubject } from 'rxjs';
import { StatesService } from './states.service';
import { HotelFacilitiesService } from './hotel-facilities.service';
import { HotelFacilitie } from '../Models/hotelFacilitie';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  firebaseHotels: Hotel[];

  // BORRAR
  

  btnR = false;

  
  // private messageSource = new BehaviorSubject<Array<Hotel>>(this.hotels);
  private messageSource2 = new BehaviorSubject<boolean>(this.btnR);
  private initState = new BehaviorSubject<boolean>(false);

  // currentMessage = this.messageSource.asObservable();
  currentMessage2 = this.messageSource2.asObservable();
  currentState = this.initState.asObservable();


  changeMessage(hotel: Hotel[]){
    // this.messageSource.next(hotel)
  }

  changeMessage2(x: boolean){
    this.messageSource2.next(x)
  }

  changeState(x: boolean){
    this.initState.next(x)
  }

  ImageArray = [];
  title = "HOTELES";

  // BORRAR ARRIBA

  constructor(private sv: HotelFacilitiesService, public afs: AngularFirestore) { 
    const order=this.afs.collection<Hotel>('hotels').snapshotChanges();
    order.subscribe( hotels => {
      hotels.forEach(item=>{
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.hotelsFB.push(hotel);
      })
    })

  }
  hotelsCollection: AngularFirestoreCollection<Hotel>;
  hotelsFB: Hotel[]=[];

  addHotel(mov){
    this.afs.collection('hotels').add(mov);
    console.log('agrego a la database')
    console.log(mov);
  }
  deleteHotel(docId:string){
    return this.afs.collection('hotels').doc(docId).delete();
  }
  getHotelsCollection(){
    return this.afs.collection<Hotel>('hotels').snapshotChanges();
  
  }

  // getHotelById(id:string){
  //   return this.hotels.find(hotel => {
  //     return hotel.id==id;
  //   })
  // }



  // BORRAR
  // rearrangeByViews(): Hotel[]{
  //   this.hotels=this.hotels.filter(e => e.nrBusquedas>0)
  //   .sort(function(a,b) {
  //     return b.nrBusquedas-a.nrBusquedas;
  //   });
    
  //   return this.hotels;
  // }

  // rearrangeBySells(): Hotel[]{
  //   this.hotels=this.hotels.filter(e => e.nrVentas>0)
  //   .sort(function(a,b) {
  //     return b.nrVentas-a.nrVentas;
  //   });
  //   return this.hotels;
  // }

  // initialList(): Hotel[]{
  //   this.hotels = [
  //     {name:'Pestana Caracas', 
  //     description: 'Hotel lujoso ubicado en el centro de Caracas. Todo el confort y atencion de lujo te esperan aquí, desde la piscina infinita hasta los 20 restaurantes.'
  //     , imgPrin: 'assets/imageHotels/pestanaCaracas.jpg'
  //     , nrBusquedas:80, nrVentas:100,
  //     bannerImg:'',
  //     stars:5,
  //     latitude:0,
  //     longitude:0,
  //     direction:'',
  //     city:'',
  //     state: 'Distrito Capital',
  //     fullday: {"available":true, "price":0},
  //     imgs: [],
  //     services:[],
  //     available:true,
  //     id:""},
  
  //     {name:'Hilton Caracas', description: 'Hotel clásico ubicado en las afueras de Caracas. Todo el confort y atencion de lujo te esperan aquí, así como la tradicion que nunca falta en las paredes de esta casa.'
  //     , imgPrin: 'assets/imageHotels/HiltonC.jpg'
  //     , nrBusquedas:50, nrVentas:200,
  //     bannerImg:'',
  //     stars:5,
  //     latitude:0,
  //     longitude:0,
  //     direction:'',
  //     city:'',
  //     state: 'Distrito Capital',
  //     fullday: {"available":true, "price":0},
  //     imgs: [],
  //     services:[],
  //     available:true,
  //     id:""},
  
  //     {name:'Sunsol Isla Caribe', description: 'Hotel ubicado en el corazón de Margarita. Playa privada, 4 piscinas, 3 restaurantes, 1 cancha de mini-golf y mucho más.'
  //     , imgPrin: 'assets/imageHotels/sunsolIC.jpg'
  //     , nrBusquedas:40, nrVentas:300,
  //     bannerImg:'',
  //     stars:5,
  //     latitude:0,
  //     longitude:0,
  //     direction:'',
  //     city:'',
  //     state: 'Distrito Capital',
  //     fullday: {"available":true, "price":0},
  //     rooms: [],
  //     imgs: [],
  //     services:[],
  //     available:true,
  //     id:""},
  
  //     {name:'Sunsol Punta Blanca', description: 'Hermoso hotel ubicado en la Isla de coche. Disfruta de esta hermosa isla y todo lo que Has para ofrecer, como buceo, motocross, y mucho más.'
  //     , imgPrin: 'assets/imageHotels/sunsolPB.jpeg'
  //     , nrBusquedas:30, nrVentas:400,
  //     bannerImg:'',
  //     stars:5,
  //     latitude:0,
  //     longitude:0,
  //     direction:'',
  //     city:'',
  //     state: 'Distrito Capital',
  //     fullday: {"available":true, "price":0},
  //     rooms: [],
  //     imgs: [],
  //     services:[],
  //     available:true,
  //     id:""},
    
  //     {name:'Hesperia Isla Margarita', description: 'Hotel de categoría 5 estrellas ubicado en Juan Griego, Isla de Margarita. Contamos con 3 restaurantes de lujo, una piscina, playa privada, y un campo de golf privado de 9 hoyos.'
  //     , imgPrin: 'assets/imageHotels/hesperiaIM.jpeg'
  //     , nrBusquedas:100, nrVentas:500,
  //     bannerImg:'',
  //     stars:5,
  //     latitude:0,
  //     longitude:0,
  //     direction:'',
  //     city:'',
  //     state: 'Distrito Capital',
  //     fullday: {"available":true, "price":0},
  //     rooms: [],
  //     imgs: [],
  //     services:[],
  //     available:true,
  //     id:""},
    
  //     {name:'Ara Merú Lodge', description: 'Hotel ubicado en Canaima. Vive la experiencia de un campamento exclusivo, con cabañas, restaurante, piscina; y por supuesto, excursiones al salto Angel, a ríos y a lagos, y mucho más.'
  //     , imgPrin: 'assets/imageHotels/araMeru.jpg'
  //     , nrBusquedas:83, nrVentas:100,
  //     bannerImg:'',
  //     stars:5,
  //     latitude:0,
  //     longitude:0,
  //     direction:'',
  //     city:'',
  //     state: 'Distrito Capital',
  //     fullday: {"available":true, "price":0},
  //     rooms: [],
  //     imgs: [],
  //     services:[],
  //     available:true,
  //     id:""},
    
  //     {name:'Islas del Sol', description: 'Lo mejor del estado Falcon en un solo hotel. En islas del Sol tendrás todo lo que necesitas; contamos con parque de agua, 8 piscinas, un mini-parque acuatico, restaurantes, habitaciones de todo tipo, incluso un mercado.'
  //     , imgPrin: 'assets/imageHotels/islasDelSol.jpg'
  //     , nrBusquedas:5000, nrVentas:1000,
  //     bannerImg:'',
  //     stars:5,
  //     latitude:0,
  //     longitude:0,
  //     direction:'',
  //     city:'',
  //     state: 'Distrito Capital',
  //     fullday: {"available":true, "price":0},
  //     rooms: [],
  //     imgs: [],
  //     services:[],
  //     available:true,
  //     id:""},
    
  //     {name:'Hotel Belensate', description: 'Hermoso hotel para disfrutar los Andes venezolanos a plenitud. Contamos con habitaciones muy bien equipadas, piscina con calefacción, jacuzzis, y restaurantes con chefs de la región que resaltan los sabores de Mérida cada día.'
  //     , imgPrin: 'assets/imageHotels/belensate.jpg'
  //     , nrBusquedas:200, nrVentas:132,
  //     bannerImg:'',
  //     stars:5,
  //     latitude:0,
  //     longitude:0,
  //     direction:'',
  //     city:'',
  //     state: 'Distrito Capital',
  //     fullday: {"available":true, "price":0},
  //     rooms: [],
  //     imgs: [],
  //     services:[],
  //     available:true,
  //     id:""},
    
  //     {name:'Selva Negra', description: 'Hotel 3 estrellas en la Colonia Tovar. Contamos con restaurante, piscina con calefacción, atención al huesped 24/7, habitaciones de lujo tipo cabaña.'
  //     , imgPrin: 'assets/imageHotels/selvaNegra.jpg'
  //     , nrBusquedas:3, nrVentas:0,
  //     bannerImg:'',
  //     stars:5,
  //     latitude:0,
  //     longitude:0,
  //     direction:'',
  //     city:'',
  //     state: 'Distrito Capital',
  //     fullday: {"available":true, "price":0},
  //     rooms: [],
  //     imgs: [],
  //     services:[],
  //   available:true,
  // id:""},
  //   ]

  //   return this.hotels;
  // }



  // gralAmenities(HasAC:boolean, HasBar:boolean, HasGym:boolean, HasPiscina:boolean, HasRestaurante:boolean, HasRoomService:boolean,
  //   HasSpa: boolean, HasWifi:boolean): String[]{
   
  //    this.ImageArray= [];
  //    if(HasAC){
  //      const icon = {icon: 'assets/icons/aC.png', msg: 'Aire acondicionado'}
  //      this.ImageArray.push(icon);
  //    };
  //    if(HasBar){
  //      const icon = {icon: 'assets/icons/bar.png', msg: 'Bar'}
  //      this.ImageArray.push(icon);
  //    };
  //    if(HasGym){
  //      const icon = {icon: 'assets/icons/gym.png', msg: 'Gym'}
  //      this.ImageArray.push(icon);
  //    };
  //    if(HasPiscina){
  //      const icon = {icon: 'assets/icons/piscina.png', msg: 'Piscina'}
  //      this.ImageArray.push(icon);
  //    };
  //    if(HasRestaurante){
  //      const icon = {icon: 'assets/icons/restaurante.png', msg: 'Restaurante'}
  //      this.ImageArray.push(icon);
  //    };
  //    if(HasRoomService){
  //      const icon = {icon: 'assets/icons/roomService.png', msg: 'Room Service'}
  //      this.ImageArray.push(icon);
  //    };
  //    if(HasSpa){
  //      const icon = {icon: 'assets/icons/spa.png', msg: 'Spa'}
  //      this.ImageArray.push(icon);
  //    };
  //    if(HasWifi){
  //      const icon = {icon: 'assets/icons/wifi.png', msg: 'Wifi'}
  //      this.ImageArray.push(icon);
  //    };
     
  //    return this.ImageArray;
  //  }

  //  getHotelX(){
  //    return this.hotelX;
  //  }

  //  getHotelsCollection(){
  //     return this.afs.collection<Hotel>('hotels').snapshotChanges();
  //   }

   

  //  getDestinations(){
  //   this.destinationSV.getDestinationsCollection().subscribe(
  //     res => (this.destinations = res.map(item =>
  //       {
  //         const destination: DestinationInterface = {
  //           id: item.payload.doc.id,
  //           name: item.payload.doc.get('name'),
  //           bannerImg: item.payload.doc.get('bannerImg'),
  //           views: item.payload.doc.get('views'),
  //           visits: item.payload.doc.get('visits'),
  //           available: item.payload.doc.get('available'),
  //         }
  //         return destination;
  //       }))
  //   )
  // }


}
