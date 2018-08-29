import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Admin, User } from './providers/user';
import { UserService } from './providers/user.service';

@Component({
  selector: 'maple-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  public users$: Observable<any>;
  admin: Admin;

  constructor(db: AngularFirestore, public userService: UserService) {
    this.users$ = db.collection('users/').valueChanges(); // créer la valeur users$ pour la vue et permet de boucler dedans
  }

  ngOnInit() {
    const queryAdministrateur = this.queryDatabase('users', 'admin', '==', true);
    this.isAdmin(queryAdministrateur);
    this.userService.admin$.subscribe(user => this.admin = user);

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

  isAdmin(queryDatabase) {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        queryDatabase.then(function (value) {
          // console.log(value);
          for (let index = 0; index < value.length; index++)
            if (value[index].uid === user.uid) {
              console.log('L\'utilisateur connecté est administrateur');
            } else {
              console.log('L\'utilisateur n\'est pas administrateur');
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
      // const query =  myCollection.where('email', '==', 'morganichoui@gmail.com');
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
