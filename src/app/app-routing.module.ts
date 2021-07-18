import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import {HomeComponent} from './front-pages/home/home.component';
import {IngresoComponent} from './front-pages/ingreso/ingreso.component';
import {RegistroComponent} from './front-pages/registro/registro.component';

const redirectLoggedInToItems = () => redirectUnauthorizedTo(['home']);

//BACK
import { DesktopComponent } from './back-pages/desktop/desktop.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent
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
    path:'desktop',
    component: DesktopComponent,
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }
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
