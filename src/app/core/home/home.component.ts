import {Component, OnInit} from '@angular/core';
import {UserService} from '../../providers/user.service';
import {User} from '../../providers/user';
import {JumpService} from "../../providers/jump/jump.service";
import {Jump} from "../../providers/jump/jump";

@Component({
  selector: 'maple-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  user: User;
  public projects$: Jump;

  constructor(public userService: UserService,
              public jumpService: JumpService) {
    this.userService.user$.subscribe(user => this.user = user);
    this.jumpService.getProjectsPerso().subscribe(i => {
      this.projects$ = i;
    });
  }

  ngOnInit() {
  }

}
