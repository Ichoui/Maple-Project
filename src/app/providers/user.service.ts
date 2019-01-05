import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Admin, User } from './user';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class UserService implements OnInit {

  user$: Observable<User>;
  admin$: Observable<Admin>;

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore, public router: Router) {
    this.user$ = afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.displayName}`).valueChanges();
        } else {
          return of(null);
        }
      }));

    this.admin$ = afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<Admin>(`administrateurs/${user.displayName}`).valueChanges();
        } else {
          return of(null);
        }
      }));
  }

  ngOnInit() {
  }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      const userAuth = firebase.auth().currentUser;
      if (userAuth.email === 'morganichoui@gmail.com') {
        this.updateUser(credential.user, true);
        this.isAdmin(credential.user);
      } else {
        this.updateUser(credential.user, false);
      }
    });
  }

  updateUser(user, bool) {
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      admin: bool
    };

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.displayName}`);
    return userRef.set(data, {merge: true});
  }

  isAdmin(user) {
    const data: Admin = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`administrateurs/${user.displayName}`);
    console.log(userRef);
    return userRef.set(data, {merge: true});
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/allianz'])
    // faire une redirection quand possible
  }
}
