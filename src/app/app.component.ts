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
    var userId = this.queryDatabase('users', 'uid');
    console.log(userId);

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
  queryDatabase(table, field) {
    const db = firebase.firestore();
    const array = [];
    const myCollection = db.collection(table);

    return myCollection.get()
      .then((querySnapshot) => {
        querySnapshot.forEach(doc => {
          // console.log(doc.data());
          // const a = doc.data();
          const a = doc.get(field);
          array.push(a);
        });
        return array;
      });
  }
}
