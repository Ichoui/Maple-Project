import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { JumpComponent } from './jump/jump.component';
import { VelibComponent } from './velib/velib.component';
import { SuelenameComponent } from './suelename/suelename.component';
import { LoginComponent } from './login/login.component';
import { ToolsComponent } from './jump/tools/tools.component';
import { SapComponent } from './jump/sap/sap.component';
import { DciComponent } from './jump/dci/dci.component';
import { PlatformComponent } from './jump/platform/platform.component';
import { AllianzComponent } from './jump/allianz/allianz.component';
import {AnieComponent} from "./jump/anie/anie.component";
import {CurriculumComponent} from "./curriculum/curriculum.component";
import {ProfilComponent} from "./curriculum/profil/profil.component";
import {FormationsComponent} from "./curriculum/formations/formations.component";
import {ExperiencesComponent} from "./curriculum/experiences/experiences.component";
import {LoisirsComponent} from "./curriculum/loisirs/loisirs.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'jump',
        component: JumpComponent,
        children: [
          {
            path:'tools',
            component: ToolsComponent
          },
          {
            path:'sap',
            component: SapComponent
          },
          {
            path:'dci',
            component: DciComponent
          },
          {
            path:'platform',
            component: PlatformComponent
          },
          {
            path:'allianz',
            component: AllianzComponent
          },
          {
            path:'anie',
            component: AnieComponent
          }
        ]
      },
      {
        path: 'velib',
        component: VelibComponent
      },
      {
        path: 'curriculum',
        component: CurriculumComponent,
        children: [
          {
            path: 'profil',
            component: ProfilComponent
          },
          {
            path: 'formations',
            component: FormationsComponent
          },
          {
            path: 'experiences',
            component: ExperiencesComponent
          },
          {
            path: 'loisirs',
            component: LoisirsComponent
          }
        ]
      }
    ]
  },
  {
    path: 'suelename',
    component: SuelenameComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}

