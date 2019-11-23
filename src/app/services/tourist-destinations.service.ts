import { Injectable } from '@angular/core';
import { TouristDestination } from '../Models/touristDestination';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TouristDestinationsService {

  tdCollection: AngularFirestoreCollection<TouristDestination>;
  tDestinations: TouristDestination[]=[];

  constructor(public afs: AngularFirestore) { 
    const order=this.afs.collection<TouristDestination>('Touristic Destinations').snapshotChanges();
    order.subscribe( tDestinations => {
      tDestinations.forEach(item=>{
        const tDestination: TouristDestination = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.tDestinations.push(tDestination);
      })
    })
  }

  getTDestinations(){
    return this.tDestinations;
  }

  addTDestination(d){
    this.afs.collection('Touristic Destinations').add(d);
    console.log('agrego a la database')
    console.log(d);
  }

  deleteTDestination(docId:string){
    return this.afs.collection('Touristic Destinations').doc(docId).delete();
  }

  getTDestinationCollection(){
    return this.afs.collection('Touristic Destinations').snapshotChanges();
  
  }

  getTDestinationById(id:string){
    return this.tDestinations.find(tDestinations => {
      return tDestinations.id==id;
    })
  }

  destinations:TouristDestination[]=[
    {"name": "Salto Ángel",
  "description":"",
  "destinationsCategory":"",
  "services":"",
  "activities":"",
  "longitude":0,
  "latitude":0,
  "state":"",
  "direction":"",
  "city":"",
  "bannerImg":"",
  "available":true
  },
    {"name": "Parque Nacional Canaima",
    "description":"",
    "destinationsCategory":"",
    "services":"",
    "activities":"",
    "longitude":0,
    "latitude":0,
    "state":"",
    "direction":"",
    "city":"",
    "bannerImg":"",
    "available":true},
    {"name": "Auyantepuy",
    "description":"",
    "destinationsCategory":"",
    "services":"",
    "activities":"",
    "longitude":0,
    "latitude":0,
    "state":"",
    "direction":"",
    "city":"",
    "bannerImg":"",
    "available":true}
  ];
  destination:TouristDestination={
    "name": "Salto Ángel",
    "description": "El Salto Ángel ('Kerepakupai Vená' en pemón, que significa «salto del lugar más profundo») es la cascada de agua más "+ 
    "alta del mundo, con una altura de 997m (807m de caída ininterrumpida), originada en el Auyantepuy.",
    "destinationsCategory":"Montaña",
    "services":"En este regalo de Dios a la naturaleza, encontrarás interesantes plantas, animales, "+ 
    "algunas veces endémicos (únicos en el mundo), y personas con una cultura, arte y gastronomía ancestral",
    "activities":"Expediciones a pie, en helicóptero y en canoas.",
    "latitude":5.9500000,
    "longitude":-62.5000000,
    "state":"Bolívar",
    "direction":"Se localiza en el Parque Nacional Canaima, Bolívar, Venezuela; un espacio natural protegido.",
    "city":"Canaima",
    "bannerImg": "assets/img/salto-angel.jpg",
    "available":true,
  };

  getDestinations(){
    return this.destinations;
  }
  getDestination(){
    return this.destination;
  }
}
