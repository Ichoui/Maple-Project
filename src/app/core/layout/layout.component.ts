import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../../providers/user.service';
import { state, style, trigger } from '@angular/animations';

@Component({
  selector: 'maple-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('rotateAnimation', [
      state('open', style({transform: 'rotateY(0deg)', transition: 'transform .24s linear'})),
      state('close', style({transform: 'rotateY(-90deg) perspective(1000px)', transition: 'transform .24s linear'}))
    ]),
  ]
})
export class LayoutComponent implements OnInit {

  state: string = 'close'; // passer à close
  toggleMenu() {
    this.state = (this.state === 'open' ? 'close' : 'open');
    const overlay = document.getElementById('overlay');
    const burger = document.getElementById('hamburger-1');
    const burgertext = document.getElementById('text-b');
    const header = document.getElementById('header');
    const login = document.getElementById('login');
    if (this.state === 'open') {
      overlay.classList.add('overlay');
      burger.classList.add('is-active');
      burgertext.classList.add('extend-burger');
      header.classList.add('shadw');
      burgertext.innerHTML = 'CLOSE';
      login.style.pointerEvents = 'none';


    } else {
      overlay.classList.remove('overlay');
      burger.classList.remove('is-active');
      burgertext.classList.remove('extend-burger');
      header.classList.remove('shadw');
      burgertext.innerHTML = 'MENU';
      login.style.pointerEvents = 'initial';
    }
  }
  constructor(private router: Router, public userService: UserService) {
  }

  ngOnInit() {
    // this.router.events.subscribe(console.log);
  }

}
