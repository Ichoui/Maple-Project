import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from './user';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable()

export class UserService implements OnInit{

  user$: Observable<User>;
  role: boolean;

  constructor(public afAuth: AngularFireAuth, public afs: AngularFirestore) {
    this.user$ = afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
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
      // noinspection BadExpressionStatementJS
      if (credential.additionalUserInfo.profile.email === 'morganichoui@gmail.com') {
        this.updateUser(credential.user, true);
      } else {
        this.updateUser(credential.user, false);
      }
    });
  }

  updateUser(user, bool) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      roles: {
        user: true,
        admin: bool
      }
    };
    return userRef.set(data, {merge: true});
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}