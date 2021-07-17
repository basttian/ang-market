import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './front-pages/home/home.component';
import {IngresoComponent} from './front-pages/ingreso/ingreso.component';
import {RegistroComponent} from './front-pages/registro/registro.component';

const routes: Routes = [
{
path:'home',
  component:HomeComponent
  },
  {
    path:'ingresar',
    component:IngresoComponent
  },
  {
    path:'registrar',
    component:RegistroComponent
  },
  {
  path:'**',
  component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
