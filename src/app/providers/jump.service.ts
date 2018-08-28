import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Jump } from './jump';

@Injectable({
  providedIn: 'root'
})
export class JumpService {

  jumpCollec: AngularFirestoreCollection<Jump>;

  constructor(public afs: AngularFirestore) {
  }
}


