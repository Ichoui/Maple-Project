import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'maple-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  profilSwitch = true;
  experiencesSwitch = false;
  formationsSwitch = false;
  loisirsSwitch = false;

  constructor() { }

  ngOnInit() {
  }

}
