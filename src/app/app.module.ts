import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { OffcanvasComponent } from './component/offcanvas/offcanvas.component';
import { HomeComponent } from './front-pages/home/home.component';
import { IngresoComponent } from './front-pages/ingreso/ingreso.component';
import { RegistroComponent } from './front-pages/registro/registro.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { DesktopComponent } from './back-pages/desktop/desktop/desktop.component';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OffcanvasComponent,
    HomeComponent,
    IngresoComponent,
    RegistroComponent,
    DesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
