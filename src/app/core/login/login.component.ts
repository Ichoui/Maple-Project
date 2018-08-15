import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { User } from '../../providers/user';

@Component({
  selector: 'maple-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user);
    console.log(this.userService.data)

  }

  loginGoogle() {
    this.userService.loginGoogle();
  }

}
