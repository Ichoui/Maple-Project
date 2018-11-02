import { Component, OnInit } from '@angular/core';
import { Jump } from '../../../providers/jump/jump';
import { JumpService } from '../../../providers/jump/jump.service';

@Component({
  selector: 'maple-allianz',
  templateUrl: './allianz.component.html',
  styleUrls: ['../jump.component.scss']
})
export class AllianzComponent implements OnInit {

  public jump: Jump;

  constructor(public jumpService: JumpService) {
    this.jumpService.getAllianz().subscribe(i => {
      this.jump = i;
      console.log(this.jump);
    });
  }

  ngOnInit() {
  }
}
