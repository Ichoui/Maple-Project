import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import {JumpService} from "../../../providers/jump/jump.service";
import {Jump} from "../../../providers/jump/jump";


@Component({
  selector: 'maple-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['../jump.component.scss']
})

export class ToolsComponent implements OnInit {

  public jump$: Observable<{}>;
  public test: any;
  public jump: Observable<Jump[]>;

  constructor(public afs: AngularFirestore, private jumpService: JumpService) {
    this.jump$ = afs.collection('jump').valueChanges();
  }


  ngOnInit() {
    this.jump$.subscribe(i => {
       this.test = i;
      console.log(this.test);
    })

    // this.jumpService.getItems().subscribe(i => {
    //   console.log(i);
    //   this.jump = i;
    // });

  }

}
