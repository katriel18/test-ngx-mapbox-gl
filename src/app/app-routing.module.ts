import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { MapaVisualComponent } from './maps/mapa-visual/mapa-visual.component';
const routes: Routes = [
  
  { path: 'mapa-visual', component: MapaVisualComponent },
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
