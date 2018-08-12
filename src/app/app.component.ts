import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'maple-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'maple';
  user: Observable<firebase.User>;
  items: Observable<any[]>;
  constructor(public afAuth: AngularFireAuth, db: AngularFirestore) {
    this.afAuth.auth.signInAnonymously();
    this.user = this.afAuth.authState;
    this.items = db.collection('items').valueChanges();
  }
}

