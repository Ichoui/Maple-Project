import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('/user').valueChanges();
  }


  ngOnInit() {
    var db = firebase.firestore();

    db.collection("user").get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        console.log(doc.data());
      });
    });
  }

}




