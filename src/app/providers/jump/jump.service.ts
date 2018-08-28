import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Jump } from './jump';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class JumpService {

  jumpCollec: AngularFirestoreCollection<Jump>;
  jumps: Observable<Jump[]>;

  constructor(public afs: AngularFirestore) {
    //TODO Le problème vient de cette assignation ... du coup on ne peut subscribe dans tools.component
    // this.jumps = this.afs.collection('testee').valueChanges();

  }

  getItems() {
    return this.jumps;
  }


}


