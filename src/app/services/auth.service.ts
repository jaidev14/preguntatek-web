import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User = new User(null);

  constructor(
    public auth: AngularFireAuth // Inject Firebase auth service
  ) {}

  // Sign in with email/password
  signIn(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = new User(result.user);
        this.user = user;
        console.log(user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signOut() {
    this.auth.signOut();
  }

}