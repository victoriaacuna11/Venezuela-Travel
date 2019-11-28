import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import{ PlanViajeInterface } from '../Models/planViaje'

@Injectable({
  providedIn: 'root'
})
export class PlanTripServiceService {

  constructor(public afs: AngularFirestore) {

    const order=this.afs.collection<PlanViajeInterface>('plan-viaje').snapshotChanges();

   }


   addPlanTrip(mov){
     //ponle return antes
    return this.afs.collection('plan-viaje').add(mov);
    
  }

  //deleteHotel(docId:string){
    //return this.afs.collection('hotels').doc(docId).delete();
  //}
  
  getPlanTripCollection(){
    return this.afs.collection<PlanViajeInterface>('plan-viaje').snapshotChanges();
  
  }
  getPlanTripById(id:string){
    return this.afs.collection<PlanViajeInterface>('plan-viaje').doc<PlanViajeInterface>(id).snapshotChanges();
  }


}
