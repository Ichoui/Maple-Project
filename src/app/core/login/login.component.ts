import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { Admin, User } from '../../providers/user';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'maple-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  admin: Admin;

  constructor(public userService: UserService, public af: AngularFirestore) {
  }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user);
    this.userService.admin$.subscribe(user => this.admin = user);
    }

  loginGoogle() {
    this.userService.loginGoogle();
  }

}
