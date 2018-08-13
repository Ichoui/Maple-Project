import { Component, OnInit } from '@angular/core';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'maple-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  constructor(public userService: UserService) {
    console.log(userService)
  }

  ngOnInit() {

  }

}
