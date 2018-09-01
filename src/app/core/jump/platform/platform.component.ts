import {Component, OnInit} from '@angular/core';
import {Jump} from "../../../providers/jump/jump";
import {JumpService} from "../../../providers/jump/jump.service";

@Component({
  selector: 'maple-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['../jump.component.scss']
})
export class PlatformComponent implements OnInit {

  public jump: Jump;

  constructor(public jumpService: JumpService) {

    this.jumpService.getPlatform().subscribe(i => {
      this.jump = i;
      console.log(this.jump);
    });
  }

  ngOnInit() {
  }
}
