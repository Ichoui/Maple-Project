import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { JumpComponent } from './jump/jump.component';
import { VelibComponent } from './velib/velib.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SuelenameComponent } from './suelename/suelename.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    CoreRoutingModule
  ],
  declarations: [HomeComponent, LayoutComponent, JumpComponent, VelibComponent, NotfoundComponent, SuelenameComponent]
})
export class CoreModule { }
