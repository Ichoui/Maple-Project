import { Component, OnDestroy, OnInit } from '@angular/core';
import { JumpService } from '../../../providers/jump/jump.service';
import { Jump } from '../../../providers/jump/jump';


@Component({
  selector: 'maple-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['../jump.component.scss']
})

export class ToolsComponent implements OnInit {

  public jump: Jump[];
  public array = [];

  constructor(public jumpService: JumpService) {
    // this.jumpService.jumps$.subscribe(i => {
    //   this.jump = i;
    // });

    this.jumpService.getItems().subscribe(i => {
      this.jump = i;
      console.log(this.jump);
    });

    console.log(this.jump);
  }


  ngOnInit() {

  }

}
