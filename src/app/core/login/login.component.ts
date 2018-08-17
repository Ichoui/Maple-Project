import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';
import { User } from '../../providers/user';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'maple-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(public userService: UserService, public af: AngularFirestore) {

  }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user);
    }

  loginGoogle() {
    this.userService.loginGoogle();
  }

}
