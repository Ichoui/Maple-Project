import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';


@Component({
  selector: 'maple-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['../jump.component.scss']
})

export class ToolsComponent implements OnInit {

  public jump$: Observable<{}>;
  public array = {};

  public item: any;

  constructor(public db: AngularFirestore) {
    this.jump$ = db.collection('jump').valueChanges();
  }


  ngOnInit() {
    this.jump$.subscribe(i => {
      console.log(i);
      this.item = i;
    })
  }

}
