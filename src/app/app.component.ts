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

  constructor(db: AngularFirestore) {
    this.users = db.collection('/users').valueChanges(); // créer la valeur users pour la vue

  }

  ngOnInit() {
    const users = this.queryDatabase('users', 'roles.admin');
    // console.log(users);
    users.then(v => {
      console.log(v);
    });


    const userId = this.queryDatabase('users', 'roles.admin', '==', true);
    // console.log(userId);

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

  /* Permet de requête sur une table et un champ en particulier
  Optionnal : on peut query sur table, champ et une valeur particulière*/
  queryDatabase(table, field, operator?, value?): any {
    const db = firebase.firestore();
    const myCollection = db.collection(table);
    const array = [];

    if (operator === undefined && value === undefined) {
      return myCollection.get().then((querySnapshot) => {
        querySnapshot.forEach(doc => {
          array.push(doc.get(field));
        });
        console.log('Field <' + field + '> : ', array.join(', '));

        return array;
      });
    } else {
      // const a = myCollection.where(field, op, value);
      const query = myCollection.where('email', '==', 'morganichoui@gmail.com');
      return query.get().then(value => {
        value.forEach(snap => {
          const data = snap.data();
          array.push(data);
        });
        return array;
      });
    }
  }

}
