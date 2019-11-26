import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { DestinationInterface } from '../Models/destination';
import { StateInterface } from '../Models/state';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  destinationsCollection: AngularFirestoreCollection<DestinationInterface>;
  destinations: DestinationInterface[]=[];
  dDoc: AngularFirestoreDocument<DestinationInterface>;

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
    return this.afs.collection('destinations').snapshotChanges();
  
  }

  getDestinationById(id:string){
    return this.destinations.find(destination => {
      return destination.id==id;
    })

    /*return this.afs.collection('destinations').doc(id).snapshotChanges();*/

  }

  updateDest(dest: DestinationInterface){
    this.dDoc = this.afs.doc(`destinations/${dest.id}`);
    this.dDoc.update(dest);
  }

}
