import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'maple-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit() {

  }
  loginGoogle() {
    this.userService.loginGoogle();
  }

}
