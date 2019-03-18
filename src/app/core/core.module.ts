import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { JumpComponent } from './jump/jump.component';
import { VelibComponent } from './velib/velib.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SuelenameComponent } from './suelename/suelename.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { JumpModule } from './jump/jump.module';
import { CurriculumComponent } from './curriculum/curriculum.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule.forRoot(),
    JumpModule
  ],
  exports: [
    CoreRoutingModule
  ],
  declarations: [HomeComponent, LayoutComponent, JumpComponent, VelibComponent, NotfoundComponent, SuelenameComponent, LoginComponent, CurriculumComponent]
})
export class CoreModule { }
