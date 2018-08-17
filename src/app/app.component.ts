import { Component, OnInit, ViewEncapsulation, ɵEMPTY_ARRAY } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'maple-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  public users: Observable<any[]>;
  public d: any;

  constructor(db: AngularFirestore) {
    this.users = db.collection('/users').valueChanges(); // créer la valeur users pour la vue

  }

  ngOnInit() {
    // const users = AppComponent.queryDatabase('users', 'roles.admin');
    const userId = this.queryDatabase('users', 'roles.admin', '==', true);
    console.log(userId);

    userId.then(function (value) {
      console.log(value);
    });

    firebase.auth().onAuthStateChanged(function (user) {
      // console.log(user.uid);
      if (user) {
        // console.log(user);
        let email, uid;

        if (user != null) {
          email = user.email;
          uid = user.uid;
        }
      }
    });
  }

  /* Permet de requête sur une table et un champ en particulier*/
  queryDatabase(table, field, op?, value?) {
    const db = firebase.firestore();
    const myCollection = db.collection(table);
    const array = [];
    console.log(value);
    if (op === undefined && value === undefined) {
      return myCollection.onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          array.push(doc.get(field));
        });
        console.log('Field <' + field + '> : ', array.join(', '));
        // const a = firebase.auth().currentUser.uid;
      });
    } else {
      // const a = myCollection.where(field, op, value);
      const query = myCollection.where('email', '==', 'morganichoui@gmail.com');
      return query.get().then(e => {
        console.log(e);
        e.forEach(re => {
          this.d = re.data();
          console.log(this.d);
          re.data();
        });
      });
    }
  }

}
