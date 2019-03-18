import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Jump } from './jump';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class JumpService {

  jumpCollec: AngularFirestoreDocument<Jump>;
  jumps$: Observable<any>;

  constructor(public afs: AngularFirestore) {
  }

  getTools() {
    this.jumpCollec = this.afs.collection('jump').doc('Tools');
    return this.jumps$ = this.jumpCollec.valueChanges();
  }

  getSap() {
    this.jumpCollec = this.afs.collection('jump').doc('SAP');
    return this.jumps$ = this.jumpCollec.valueChanges();
  }

  getDci() {
    this.jumpCollec = this.afs.collection('jump').doc('DCI');
    return this.jumps$ = this.jumpCollec.valueChanges();
  }

  getPlatform() {
    this.jumpCollec = this.afs.collection('jump').doc('Platform');
    return this.jumps$ = this.jumpCollec.valueChanges();
  }

  getAllianz() {
    this.jumpCollec = this.afs.collection('jump').doc('Allianz');
    return this.jumps$ = this.jumpCollec.valueChanges();
  }

  getAnie() {
    this.jumpCollec = this.afs.collection('jump').doc('Anie');
    return this.jumps$ = this.jumpCollec.valueChanges();
  }

  ////////////////////////////////////////
  ////////////// GET PROJECTS ////////////
  ////////////////////////////////////////

  getProjectsPerso() {
    this.jumpCollec = this.afs.collection('projects').doc('perso');
    return this.jumps$ = this.jumpCollec.valueChanges();
  }

}


