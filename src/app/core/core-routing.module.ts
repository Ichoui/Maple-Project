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
          }
        ]
      },
      {
        path: 'velib',
        component: VelibComponent
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

