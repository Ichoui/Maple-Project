import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from '../core-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ToolsComponent } from './tools/tools.component';
import { SapComponent } from './sap/sap.component';
import { DciComponent } from './dci/dci.component';
import { PlatformComponent } from './platform/platform.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [ToolsComponent, SapComponent, DciComponent, PlatformComponent]
})
export class JumpModule { }
