import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

@Component({
  selector: 'maple-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger('rotateAnimation', [
      state('open', style({ transform: 'rotateY(0deg)', transition: 'transform .24s linear'})),
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
      if (this.state === 'open') {
        overlay.classList.add('overlay');
        burger.classList.add('is-active');

      } else {
        overlay.classList.remove('overlay');
        burger.classList.remove('is-active');
      }
  }

  constructor(private router: Router) {
  }


  ngOnInit() {
    this.router.events.subscribe(console.log)
  }
}
