import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { JumpService } from '../../../providers/jump/jump.service';
import { Jump } from '../../../providers/jump/jump';


@Component({
  selector: 'maple-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['../jump.component.scss']
})

export class ToolsComponent implements OnInit {

  // public jump$: Observable<Jump[]>;
  public jump: Jump[];
  public array = [];

  constructor(public afs: AngularFirestore, private jumpService: JumpService) {
  }


  ngOnInit() {
    this.jumpService.getItems().subscribe(i => {
      this.jump = i;
      console.log(i);
      this.array = Array.of(Object.entries(this.jump));


      // console.log(this.jump);
      // this.array = Object.entries(this.jump);
      console.log(this.array);
    });


  }

}
