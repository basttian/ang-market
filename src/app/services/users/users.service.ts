import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  public account = {
    type:['administrator', 'staff', 'client']
  }

  constructor(private firestore: AngularFirestore) {}

   //Crea un nuevo usuario con typo
   public createUser( data: {uid:string , email:string, type :string | void}) {
    let datos = {
      uid:data.uid,
      email:data.email,
      type: this.account.type[2]
    }
    return this.firestore.collection('users').add(datos);
  }




}
