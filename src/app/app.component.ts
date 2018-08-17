import { Component, OnInit, ViewEncapsulation, ɵEMPTY_ARRAY } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { logger } from 'codelyzer/util/logger';

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
    // const users = AppComponent.queryDatabase('users', 'roles.admin');
    const userId = AppComponent.queryDatabase('users', 'uid');
    console.log(userId.name);

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
    const db = firebase.firestore();

    var citiesRef = db.collection("cities");

     var query = citiesRef.where("capital", "==", true);
    console.log(query);
  }


  /* Permet de requête sur une table et un champ en particulier*/
  static queryDatabase(table, field) {
    const db = firebase.firestore();
    let array = [];
    const myCollection = db.collection(table);

    return myCollection.onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        array.push(doc.get(field));
      });
      console.log('Field <' + field + '> : ', array.join(', '));
      // const a = firebase.auth().currentUser.uid;
    });

    // const a = myCollection.where('email', '==', 'morganichoui@gmail.com');
    // console.log(a);
  }
}
