import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Jump } from './jump';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class JumpService {

  jumpCollec: AngularFirestoreCollection<Jump>;
  jumps: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.jumps = this.afs.collection('jump').doc('Tools').valueChanges();
  }

  getItems(): Observable<Jump[]> {
    return this.jumps;
  }


}


