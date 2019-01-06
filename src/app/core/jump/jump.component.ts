import { Component, OnInit } from '@angular/core';
import { Admin, User } from '../../providers/user';
import { UserService } from '../../providers/user.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'maple-jump',
  templateUrl: './jump.component.html',
  styleUrls: ['./jump.component.scss']
})
export class JumpComponent implements OnInit {

  user: User;
  admin: Admin;

  constructor(public userService: UserService, public af: AngularFirestore) {
  }

  ngOnInit() {
    this.userService.user$.subscribe(user => this.user = user);
    this.userService.admin$.subscribe(user => this.admin = user);
  }
}
