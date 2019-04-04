
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { 

  }
  save(user: firebase.User){
    this.db.object('/user/'+user.uid).update({
      name: user.displayName,
      email: user.email
    })
  }
  getUser(uid:string){
    return this.db.object('/user/'+uid);

  }
  
}
