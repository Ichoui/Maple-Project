import {Component, OnInit} from '@angular/core';
import {JumpService} from "../../../providers/jump/jump.service";
import {Jump} from "../../../providers/jump/jump";

@Component({
  selector: 'maple-anie',
  templateUrl: './anie.component.html',
  styleUrls: ['../jump.component.scss']
})
export class AnieComponent implements OnInit {

  public jump: Jump;

  constructor(public jumpService: JumpService) {
    this.jumpService.getAnie().subscribe(i => {
      this.jump = i;
      console.log(this.jump);
    });
  }

  ngOnInit() {
  }

}
