import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Observable<firebase.User>;
  constructor(public authUser: AngularFireAuth, private router: Router) {
    this.user = authUser.authState;
  }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.authUser.auth.signInWithPopup(provider).then(e => {
      this.router.navigate(['/home']);
    }).then(function (result) {
      console.log(result);
    });
  }

  logout() {
    this.authUser.auth.signOut().then(e => {
      this.router.navigate(['/home']);
    });
  }
}
