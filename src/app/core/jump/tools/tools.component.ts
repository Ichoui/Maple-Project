import { JumpService } from '../../../providers/jump/jump.service';
import { Jump } from '../../../providers/jump/jump';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'maple-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['../jump.component.scss']
})

export class ToolsComponent implements OnInit {

  public jump: Jump[];
  public array = [];

  testObject: { [key: number]: string } =
    {
      1: 'Object Value 1',
      2: 'Object Value 2',
      3: 'Object Value 3'
    };

  constructor(public jumpService: JumpService) {

    this.jumpService.getItems().subscribe(i => {
      this.jump = i;
      console.log(this.jump);
    });
  }


  ngOnInit() {

  }

}
