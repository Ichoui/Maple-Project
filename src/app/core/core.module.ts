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
import { ProfilComponent } from './curriculum/profil/profil.component';
import { ExperiencesComponent } from './curriculum/experiences/experiences.component';
import { FormationsComponent } from './curriculum/formations/formations.component';
import { LoisirsComponent } from './curriculum/loisirs/loisirs.component';

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
  declarations: [HomeComponent, LayoutComponent, JumpComponent, VelibComponent, NotfoundComponent, SuelenameComponent, LoginComponent, CurriculumComponent, ProfilComponent, ExperiencesComponent, FormationsComponent, LoisirsComponent]
})
export class CoreModule { }
