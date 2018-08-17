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
  public abc: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.users = db.collection('/users').valueChanges(); // créer la valeur users pour la vue


  }

  ngOnInit() {
    const userMail = this.queryDatabase('users', 'email', '==', 'morganichoui@gmail.com');
    const administrateur = this.queryDatabase('users', 'roles.admin', '==', true);
    this.isAdmin(administrateur);

    /*
        firebase.auth().onAuthStateChanged(user => {
          if (user != null) {
            let email, val;

            email = user.email;
            userId.then(function (value) {
              val = value;
              val[0].email === email ? console.log('Administrateur Morgan connecté') : console.log('Utilisateur qui n\'est pas morgan');
            });
          }
        });
    */
  }

  isAdmin(queryDatabase){
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        queryDatabase.then(function (value) {
          console.log(value);
          for (let index = 0; index < value.length; index++)
            if (value[index].uid === user.uid) {
              console.log('L\'utilisateur connecté est administrateur');
              return true;
            }
        });
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
      const query = myCollection.where(field, operator, value);
      // const query = myCollection.where('email', '==', 'morganichoui@gmail.com');
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
