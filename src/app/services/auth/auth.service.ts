import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

import { UsersService } from '../users/users.service'

import UIkit from '../../../assets/js/uikit.js';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth,public routes:Router, private _ngZone: NgZone, public users: UsersService) { 

    this.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is signed In')
        this._ngZone.run(()=>{
          this.routes.navigate(['home'])
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

  createUser(paramUser: string , paramPass:string){
    this.auth.createUserWithEmailAndPassword(paramUser, paramPass)
      .then((userCredential) => {
        var user = userCredential.user;
        let data = {
          uid:user.uid,
          email:user.email,
          type: ''
        }
        //almacenar usuario
        this.users.createUser(data).then(()=>{
          UIkit.notification({
            message: `<span uk-icon=\'icon: user\'></span> 
                      <span> Bienvenido ${user.email} </span>`,
            status: 'primary',
            pos: 'top-center',
            timeout: 3500
          });
          //enviar verificacion al email
          firebase.auth().currentUser.sendEmailVerification()
            .then(() => {
              this.verificationEmailFalse()
            });
          }).catch((e)=>{console.log(e)});
      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        UIkit.notification({
          message: `<span uk-icon=\'icon: ban\'></span> 
                    <span> ${errorMessage} </span>`,
          status: 'danger',
          pos: 'top-right',
          timeout: 3500
        });
    });
  }

  login(paramUser: string , paramPass:string){
    this.auth.signInWithEmailAndPassword(paramUser, paramPass)
      .then((userCredential) => {
        var user = userCredential.user;
        if(user.emailVerified){
          this._ngZone.run(()=>{
            this.routes.navigate(['desktop'])
          })
        }else{
          this.verificationEmailFalse()
        }
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        UIkit.notification({
          message: `<span uk-icon=\'icon: ban\'></span> 
                    <span> ${errorMessage} </span>`,
          status: 'danger',
          pos: 'top-right',
          timeout: 3500
        });
    });
  }
    

  loginGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


  logout() {
    this.auth.signOut().then(() => {
      // Sign-out successful.
      UIkit.notification({
        message: `<span uk-icon=\'icon: check\'></span> 
                  <span> Cierre de sesión exitoso.</span>`,
        status: 'primary',
        pos: 'top-right',
        timeout: 1500
      });
    }).catch((error) => {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
        UIkit.notification({
            message: `<span uk-icon=\'icon: ban\'>
                      </span><span> ${errorMessage} </span>`,
            status: 'danger',
            pos: 'top-right',
            timeout: 3500
        })
    });
  }

  /* fast sol.*/
  verificationEmailFalse(){
    this.auth.signOut().then(() => {
      UIkit.notification({
          message: `<span uk-icon=\'icon: ban\'>
                    </span><span> Tu cuenta se encuentra registrada, pero debes verificar tu email antes de ingresar. </span>`,
          status: 'danger',
          pos: 'top-center',
          timeout: 5000
      })
    })
  }

  sendPasswordReset(param_email) {
    this.auth.sendPasswordResetEmail(param_email)
      .then(() => {
        UIkit.modal('#modal-center').hide();
        UIkit.notification({
          message: `<span uk-icon=\'icon: check\'></span> 
                    <span> Email de restablecimiento de contraseña enviado.</span>`,
          status: 'primary',
          pos: 'top-center',
          timeout: 3500
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        UIkit.notification({
          message: `<span uk-icon=\'icon: ban\'>
                    </span><span> ${errorMessage} </span>`,
          status: 'danger',
          pos: 'top-center',
          timeout: 3500
        })
      });
  }


}
