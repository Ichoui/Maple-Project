import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianzComponent } from './allianz.component';

describe('AllianzComponent', () => {
  let component: AllianzComponent;
  let fixture: ComponentFixture<AllianzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllianzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllianzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
