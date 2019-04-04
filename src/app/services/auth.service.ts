import { auth } from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase'
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable< firebase.User>;
  constructor(private Auth:AngularFireAuth, private route : ActivatedRoute){
    this.user$ = Auth.authState;
  }
  login(){
    this.Auth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  logOut(){
    this.Auth.auth.signOut();
  }
}
