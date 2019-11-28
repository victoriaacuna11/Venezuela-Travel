import { Injectable } from '@angular/core';
import { RoomService } from '../Models/roomService';
import { Room } from '../Models/room';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  rooms:Room[]=[];
  doc: AngularFirestoreDocument<Room>;

  constructor(public afs: AngularFirestore) { 
    const order=this.afs.collection<Room>('rooms').snapshotChanges();
    order.subscribe( rooms => {
      rooms.forEach(item=>{
        const room: Room = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.rooms.push(room);
      })
    })
  }

  cajaFuerte:RoomService={
    "name":"Caja fuerte",
    "available": true,
    "icon": "assets/img/cajaFuerte.png"
  }
  phone:RoomService={
    "name":"Teléfono",
    "available": true,
    "icon": "assets/img/phone.png"
  }
  sofaCama:RoomService={
    "name":"Sofa Cama",
    "available": true,
    "icon": "assets/img/sofaCama.png"
  }
  wifi:RoomService={
    "name": "Wifi",
    "available":true,
    "icon":"assets/img/wifi.png"
  }
  tv:RoomService={
    "name":"TV",
    "available":true,
    "icon": "assets/img/tv.png"
  }
  airConditioner:RoomService={
    "name":"Aire acondicionado",
    "available":true,
    "icon": "assets/img/airconditioner.png"
  }
  kitchen:RoomService={
    "name":"Cocina",
    "available":true,
    "icon": "assets/img/kitchen.png"
  }
  wardrobe:RoomService={
    "name":"Armario",
    "available": true,
    "icon": "assets/img/wardrobe.png"
  }

  getFacilities(){
    return [this.kitchen,
    this.airConditioner,
    this.cajaFuerte,
    this.phone,
    this.sofaCama,
    this.tv,
    this.wardrobe,
    this.wifi]
  }

  addRoom(mov){
    this.afs.collection('rooms').add(mov);
    console.log("addRoom")
  }

  deleteRoom(docId:string){
    return this.afs.collection('rooms').doc(docId).delete();
  }
  getRoomsCollection(){
    return this.afs.collection<Room>('rooms').snapshotChanges();
  
  }
  getRoomById(id:string){
    return this.afs.collection<Room>('rooms').doc<Room>(id).snapshotChanges();
  }

  updateRoom(room:Room){
    this.doc = this.afs.doc(`rooms/${room.id}`);
    this.doc.update(room);
  }
}
