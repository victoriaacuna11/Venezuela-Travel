import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { StateInterface } from '../Models/state';
import { Usuario } from '../Models/usuario';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  userDoc:AngularFirestoreDocument<Usuario>;


  users:Usuario[]=[];
  userCollection:AngularFirestoreCollection<Usuario>;

  constructor(public afs: AngularFirestore) {
    const order = this.afs.collection<Usuario>('users').snapshotChanges();
    order.subscribe(users => {
      users.forEach(item => {
        const user: Usuario = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.users.push(user);
      })
    })
  
}

addUser(mov) {
  return this.afs.collection('users').add(mov);
  //console.log('agrego a la database')
  //console.log(mov);
}
getUserById(id: string) {
  return this.afs.collection<Usuario>('users').doc<Usuario>(id).snapshotChanges();
  /*return this.states.find(st => {
    return st.id == id;
  });*/
}
getUserCollection() {
  return this.afs.collection<Usuario>('users').snapshotChanges();

}

}
