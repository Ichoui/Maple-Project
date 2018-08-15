import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { User } from './providers/user';

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
    const userId = this.queryDatabase('users', 'uid');
    console.log(userId);

    Object.keys(userId).forEach(function(key) {
      console.log(key, userId[key]);
    });


    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        let email, uid;

        if (user != null) {
          email = user.email;
          uid = user.uid;
        }
      }
    });
  }

  /* Permet de requête sur une table et un champ en particulier*/
  queryDatabase(table, champ) {
    const array = [];
    const db = firebase.firestore();
    db.collection(table).get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        // console.log(doc.data());
        const a = doc.get(champ);
        array.push(a);

      });
    });
    return array;
  }

}
