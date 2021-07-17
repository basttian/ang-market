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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OffcanvasComponent,
    HomeComponent,
    IngresoComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
