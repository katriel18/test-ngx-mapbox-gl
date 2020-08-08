import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { AppRoutingModule } from './app-routing.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { MapaClienteComponent } from './maps/mapa-cliente/mapa-cliente.component';
import { MapaEmpresaComponent } from './maps/mapa-empresa/mapa-empresa.component';
import { MapaComponent } from './maps/mapa/mapa.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { MapaVisualComponent } from './maps/mapa-visual/mapa-visual.component';
@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    MapaClienteComponent,
    MapaEmpresaComponent,
    MapaComponent,
    EmpresaComponent,
    MapaVisualComponent
  ],
  imports: [
    BrowserModule,

    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoia2F0cmllbCIsImEiOiJja2RjOXlrZTUxM3RsMnlxcmtwd3NrZWMwIn0.buu1mRI4DLdAUacSHR_2gw', // Optional, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'pk.eyJ1Ijoia2F0cmllbCIsImEiOiJja2RjOXlrZTUxM3RsMnlxcmtwd3NrZWMwIn0.buu1mRI4DLdAUacSHR_2gw' // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    }),

    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
