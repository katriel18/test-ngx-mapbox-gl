import { Empresa } from './models/empresa';
import { Component, OnInit } from '@angular/core';

import { ServiceEmpresaService } from './services/service-empresa.service';
import { ServiceClienteService } from './services/service-cliente.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empresas:Empresa[];
  constructor(
  public empresasService:ServiceEmpresaService,
  public clienteService:ServiceClienteService
  ) { }
  OnInit(){
  }

}
