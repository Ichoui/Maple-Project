import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuelenameComponent } from './suelename.component';

describe('SuelenameComponent', () => {
  let component: SuelenameComponent;
  let fixture: ComponentFixture<SuelenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuelenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuelenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
