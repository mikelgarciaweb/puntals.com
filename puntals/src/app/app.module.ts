import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//imports para haver las rutas
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InicioComponent } from './inicio/inicio.component';
import { SuelosComponent } from './suelos/suelos.component';
import { MueblesComponent } from './muebles/muebles.component';
import { PuertasComponent } from './puertas/puertas.component';

// Rutas app-routing
const routes: Routes = [
  {path: 'inicio', component: InicioComponent },
  {path: 'servicios', component: ServiciosComponent },
  {path: 'suelos', component: SuelosComponent },
  {path: 'muebles', component: MueblesComponent },
  {path: 'puertas', component: PuertasComponent },


  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiciosComponent,
    InicioComponent,
    SuelosComponent,
    MueblesComponent,
    PuertasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
