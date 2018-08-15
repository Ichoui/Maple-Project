import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../providers/user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { User } from '../../providers/user';
import * as firebase from 'firebase';

@Component({
  selector: 'maple-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('rotateAnimation', [
      state('open', style({transform: 'rotateY(0deg)'})),
      state('close', style({transform: 'rotateY(-90deg) perspective(1000px)'})),
      transition('close => open', animate('.3s linear')),
      transition('open => close', animate('.3s linear'))
    ]),
    trigger('logoutMenu', [
      state('open', style({opacity: '1.0'})),
      state('close', style({opacity: '0.0'})),
      transition('open => close', animate('1s ease-out')),
      transition('close => open', animate('0.3s ease-in'))
    ])
  ]
})
export class LayoutComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  state: string = 'close'; // passer à close
  toggleMenu() {
    this.state = (this.state === 'open' ? 'close' : 'open');
    const overlay = document.getElementById('overlay');
    const burger = document.getElementById('hamburger-1');
    const burgertext = document.getElementById('text-b');
    const header = document.getElementById('header');
    const login = document.getElementById('login');
    const logout = document.getElementById('logout');
    if (this.state === 'open') {
      overlay.classList.add('overlay');
      burger.classList.add('is-active');
      burgertext.classList.add('extend-burger');
      header.classList.add('shadw');
      burgertext.innerHTML = 'CLOSE';
      login ? login.style.pointerEvents = 'none' : 'none';
      logout ? logout.style.pointerEvents = 'none' : 'none';


    } else {
      overlay.classList.remove('overlay');
      burger.classList.remove('is-active');
      burgertext.classList.remove('extend-burger');
      header.classList.remove('shadw');
      burgertext.innerHTML = 'MENU';
      login ? login.style.pointerEvents = 'initial' : 'none';
      logout ? logout.style.pointerEvents = 'initial' : 'none';
    }
  }

  etat: string = 'close';
  toggleIdentity() {
    this.etat = (this.etat === 'open' ? 'close' : 'open');
  }

  user: User;
  ngOnInit() {
    // this.router.events.subscribe(console.log);
    this.userService.user$.subscribe(user => this.user = user);

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('ok')
        console.log(user);
      } else {
        console.log('noone');
      }
    });  }

}
