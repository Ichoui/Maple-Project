import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { User } from '../../providers/user';

@Component({
  selector: 'maple-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  user: User;

  constructor(public userService: UserService) {
    this.userService.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {

  }

}
