import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ReserveInterface } from '../Models/reserve';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  dDoc: AngularFirestoreDocument<ReserveInterface>;
  constructor(public afs: AngularFirestore) { 
    const order=this.afs.collection<ReserveInterface>('reserves').snapshotChanges();
  }



  addReserve(mov){
    this.afs.collection('reserves').add(mov);
    
  }

  //deleteHotel(docId:string){
    //return this.afs.collection('hotels').doc(docId).delete();
  //}
  
  getReserveCollection(){
    return this.afs.collection<ReserveInterface>('reserves').snapshotChanges();
  
  }
  getReserveById(id:string){
    return this.afs.collection<ReserveInterface>('reserves').doc<ReserveInterface>(id).snapshotChanges();
  }

  updateReserve(reserve: ReserveInterface) {
    this.dDoc = this.afs.doc(`reserves/${reserve.id}`);
    this.dDoc.update(reserve);
  }

}
