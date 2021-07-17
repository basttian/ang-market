import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth,public routes:Router, private _ngZone: NgZone) { 

    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed In')
        this._ngZone.run(()=>{
          this.routes.navigate(['desktop'])
        })
      } else {
        console.log('User is signed Out')
        this._ngZone.run(()=>{
          this.routes.navigate(['home'])
        })
      }
    })

  }

  usuarioConectadoActivo(): Promise<any> {
    return this.auth.currentUser
  }

  loginGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


  logout() {
    this.auth.signOut();
  }


}
