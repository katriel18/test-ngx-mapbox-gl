import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { MapaComponent } from './maps/mapa/mapa.component';
const routes: Routes = [
  
  { path: 'mapa', component: MapaComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'empresa', component: EmpresaComponent },
  
  { path: '', redirectTo: '/cliente', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
