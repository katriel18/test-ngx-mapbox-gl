import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { MapaVisualComponent } from './maps/mapa-visual/mapa-visual.component';
import { MapaRutaComponent } from './maps/mapa-ruta/mapa-ruta.component';
const routes: Routes = [
  
  { path: 'mapa-visual', component: MapaVisualComponent },
  { path: 'mapa-ruta', component: MapaRutaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'empresa', component: EmpresaComponent },
  
  { path: '', redirectTo: '/mapa-visual', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
