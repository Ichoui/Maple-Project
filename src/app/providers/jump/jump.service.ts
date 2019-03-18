import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Jump } from './jump';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {Project} from "./projects";


@Injectable({
  providedIn: 'root'
})
export class JumpService {

  JumpCollections: AngularFirestoreDocument<Jump>;
  ProjectCollections: AngularFirestoreDocument<Project>;
  jumps$: Observable<any>;
  projects$: Observable<any>;

  constructor(public afs: AngularFirestore) {
  }

  getTools() {
    this.JumpCollections = this.afs.collection('jump').doc('Tools');
    return this.jumps$ = this.JumpCollections.valueChanges();
  }

  getSap() {
    this.JumpCollections = this.afs.collection('jump').doc('SAP');
    return this.jumps$ = this.JumpCollections.valueChanges();
  }

  getDci() {
    this.JumpCollections = this.afs.collection('jump').doc('DCI');
    return this.jumps$ = this.JumpCollections.valueChanges();
  }

  getPlatform() {
    this.JumpCollections = this.afs.collection('jump').doc('Platform');
    return this.jumps$ = this.JumpCollections.valueChanges();
  }

  getAllianz() {
    this.JumpCollections = this.afs.collection('jump').doc('Allianz');
    return this.jumps$ = this.JumpCollections.valueChanges();
  }

  getAnie() {
    this.JumpCollections = this.afs.collection('jump').doc('Anie');
    return this.jumps$ = this.JumpCollections.valueChanges();
  }

  ////////////////////////////////////////
  ////////////// GET PROJECTS ////////////
  ////////////////////////////////////////

  getProjectsPerso() {
    this.ProjectCollections = this.afs.collection('projects').doc('perso');
    return this.projects$ = this.ProjectCollections.valueChanges();
  }

}


