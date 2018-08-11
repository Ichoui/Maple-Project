import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { JumpComponent } from './jump/jump.component';
import { VelibComponent } from './velib/velib.component';
import { SuelenameComponent } from './suelename/suelename.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

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
        component: JumpComponent
      },
      {
        path: 'velib',
        component: VelibComponent
      },
      {
        path: 'suelename',
        component: SuelenameComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      }
    ]
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

