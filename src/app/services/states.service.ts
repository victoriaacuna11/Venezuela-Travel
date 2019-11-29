import { Injectable } from '@angular/core';
import { StateInterface } from '../Models/state';
import { DestinationsComponent } from '../components/destinations/destinations.component';
import { TouristDestination } from '../Models/touristDestination';
import { TouristDestinationsService } from './tourist-destinations.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  destinations: TouristDestinationsService;
  dDoc: AngularFirestoreDocument<StateInterface>;

  // bolivar: StateInterface={
  //   "id":"id",
  //   "name": "Bolívar",
  //   "bannerImg": "assets/img/hotel-banner.jpg",
  //   "hotels": [],
  //   "destinations":[],

  // "touristDestinations": [{"name": "Salto Ángel"},
  // {"name": "Parque Nacional Canaima"},
  // {"name": "Auyantepuy"}],

  //   "imgs": ["http://www.autana.org/DESTINOS/panama/ewExternalFiles/HeaderAutana@2x.jpg",
  //   "http://www.panorama.com.ve/__export/1495456921565/sites/panorama/img/pitoquito/2017/05/22/dsc04979.jpg",
  //   "https://tvenlacalle.com/wp-content/uploads/2018/06/parque-nacional-canaima-1.jpg",
  //   "https://viajespereira.com/wp-content/uploads/2016/01/04.jpg",
  //   "http://www.akanan.com/esp/fotos/foto_1385129874.jpg"],

  //   "gastronomy": "En la gastronomía del estado Bolívar, destaca la Sapoara, que es un pescado de río que abunda en el Orinoco y el Caroní, puede prepararse tanto relleno, asado, frito o en sancocho. El pastel de Morrocoy es otro plato típico que consiste en la desmenuzación de la carne del morrocoy combinándolo con aliños. ",

  //   "culture":"La cultura del estado Bolívar se caracteriza por la presencia de los carnavales de El Callao que es un pueblo minero donde las culturas venezolana, francesa, inglesa, brasileña, española y antillana se unieron. El carnaval comienza entre febrero y marzo y los pobladores salen a la calle danzando al ritmo del calipso.",

  //   "recreativeActs":"Bolívar se destaca por sus hermosos paisajes naturales que te quitarán el aliento. Entre ellos se pueden destacar el Parque La Llovizna, el Salto Ángel, el Tepuy Roraima y el Parque Nacional Canaima. Cabe destacar que el Salto Ángel es una belleza natural tan increíble que fue candidata como una de las siete maravillas modernas.",

  //   "mainHotels": "Entre los hoteles más destacados de esta zona, se encuentran 'Hostería Waipá', 'Waku Lodge', 'Hotel Laja Real', 'AraMerú' y 'Tapuy Lodge'.",

  //   "views":7,
  //   "visits":7,
  //   "display": true,
  // }

  statesCollection: AngularFirestoreCollection<StateInterface>;
  states: StateInterface[] = [];

  constructor(public afs: AngularFirestore) {
    const order = this.afs.collection<StateInterface>('states').snapshotChanges();
    order.subscribe(states => {
      states.forEach(item => {
        const state: StateInterface = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.states.push(state);
      })
    })
    //   this.states = this.afs.collection('states').snapshotChanges().pipe(
    //     map(changes => {
    //     return changes.map(a => {
    //       const data = a.payload.doc.data() as StateInterface;
    //       data.id=a.payload.doc.id;
    //       return data;
    //     })
    //   })
    // )
  }

  // getState(){
  //   return this.bolivar;
  // }

  getStates() {
    return this.states;
  }

  addState(mov) {
    return this.afs.collection('states').add(mov);
    // console.log('agrego a la database')
    // console.log(mov);
  }

  deleteState(docId: string) {
    return this.afs.collection('states').doc(docId).delete();
  }

  getStatesCollection() {
    return this.afs.collection<StateInterface>('states').snapshotChanges();

  }

  getStateByCategory(destId: string){
    return this.afs.collection<StateInterface>('states').ref.where('destination', '==', destId).get();
  }

  getStateById(id: string) {
    return this.afs.collection<StateInterface>('states').doc<StateInterface>(id).snapshotChanges();
    /*return this.states.find(st => {
      return st.id == id;
    });*/
  }

  updateS(state: StateInterface) {
    this.dDoc = this.afs.doc(`states/${state.id}`);
    this.dDoc.update(state);
  }

  rearrangeByViews(statesToFilter: StateInterface[]): StateInterface[]{
    statesToFilter=statesToFilter.filter(e => e.views>0)
       .sort(function(a,b) {
         return b.views-a.views;
       });    
       return statesToFilter;
  }
  
  rearrangeBySells(statesToFilter: StateInterface[]): StateInterface[]{
    statesToFilter=statesToFilter.filter(e => e.visits>0)
       .sort(function(a,b) {
         return b.visits-a.visits;
       });
       return statesToFilter;
  }

}
