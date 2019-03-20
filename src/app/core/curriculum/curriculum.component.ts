import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'maple-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    setTimeout(() =>{
      document.getElementById('arrow-indicate').classList.add('hideur');
    },8000)
  }
}
