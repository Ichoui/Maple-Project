import {JumpService} from '../../../providers/jump/jump.service';
import {Jump} from '../../../providers/jump/jump';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'maple-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['../jump.component.scss']
})

export class ToolsComponent implements OnInit {

  public jump: Jump;

  constructor(public jumpService: JumpService) {

    this.jumpService.getTools().subscribe(i => {
      this.jump = i;
      // console.log(this.jump);
    });
  }

  ngOnInit() {

  }
}
