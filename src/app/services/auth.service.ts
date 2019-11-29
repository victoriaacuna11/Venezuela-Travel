import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserRouting } from '../Models/userRoute';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any;


  constructor(
              public afs: AngularFirestore,
              public afAuth:AngularFireAuth,
              public router:Router,
              public ngZone:NgZone
                ) {


                  this.afAuth.authState.subscribe(user=>{

                    if(user){

                      this.userData=user;
                      localStorage.setItem('user', JSON.stringify(this.userData));


                    }else{

                        localStorage.setItem('user', null);
                        JSON.parse(localStorage.getItem('user'));

                    }



                  });




                } 

                signIn(user:string,password:string){


                  return this.afAuth.auth.signInWithEmailAndPassword(user,password).then((result)=>{

                      console.log('Sesion iniciada');
                      this.router.navigate(['admin/dashboard']);


                  }).catch((error)=>{
                    window.alert(error.message);
                  });


                }


                signOut(){

                  return this.afAuth.auth.signOut().then(()=>{
                    localStorage.removeItem('user');
                    console.log('se cerro la sesion');
                    this.router.navigate(['/'])

                  })

                }


                get isAuthenticated():boolean{

                    const user= JSON.parse(localStorage.getItem('user'));
                    return (user!==null)? true:false;
                }







}


  









