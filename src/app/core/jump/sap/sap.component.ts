import {Component, OnInit} from '@angular/core';
import {Jump} from "../../../providers/jump/jump";
import {JumpService} from "../../../providers/jump/jump.service";

@Component({
  selector: 'maple-sap',
  templateUrl: './sap.component.html',
  styleUrls: ['../jump.component.scss']
})
export class SapComponent implements OnInit {

  public jump: Jump[];

  constructor(public jumpService: JumpService) {

    this.jumpService.getSap().subscribe(i => {
      this.jump = i;
      console.log(this.jump);
    });
  }

  ngOnInit() {
  }

}
