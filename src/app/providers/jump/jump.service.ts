import { AngularFirestore } from 'angularfire2/firestore';
import { Jump } from './jump';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class JumpService {

  jumps$: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.jumps$ = this.afs.collection('jump').doc('Tools').valueChanges();
    // this.jumps$ = this.afs.collection('testee').doc('mytest').valueChanges();

  }

  getItems(): Observable<Jump[]> {
    return this.jumps$;
  }
}


