import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Test } from '../../../providers/jump';

@Component({
  selector: 'maple-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['../jump.component.scss']
})

export class ToolsComponent implements OnInit {

  public jump$: Observable<Test[]>;
  public collection: AngularFirestoreCollection<Test>;

  constructor(db: AngularFirestore) {
    this.collection = db.collection<Test>('jump');
    this.jump$ = this.collection.valueChanges();
  }


  ngOnInit() {
  }

}
