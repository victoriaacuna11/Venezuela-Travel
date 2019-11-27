import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { DestinationInterface } from '../Models/destination';
import { StateInterface } from '../Models/state';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  destinationsCollection: AngularFirestoreCollection<DestinationInterface>;
  destinations: DestinationInterface[]=[];

  constructor(public afs: AngularFirestore) { 
    const order=this.afs.collection<DestinationInterface>('destinations').snapshotChanges();
    order.subscribe( destinations => {
      destinations.forEach(item=>{
        const destination: DestinationInterface = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.destinations.push(destination);
      })
    })
  }

  addDestination(mov){
    this.afs.collection('destinations').add(mov);

  }

  getDestinations(){
    return this.destinations;
  }

  deleteDestination(docId:string){
    return this.afs.collection('destinations').doc(docId).delete();

  }

  getDestinationsCollection(){
    return this.afs.collection<DestinationInterface>('destinations').snapshotChanges();
  
  }

  getDestinationById(id:string){
    return this.afs.collection<DestinationInterface>('destinations').doc<DestinationInterface>(id).snapshotChanges();
  }

}
