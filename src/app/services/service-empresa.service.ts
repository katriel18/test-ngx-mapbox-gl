import { Empresa } from './../models/empresa';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmpresaService {
  codigo:number=0;
  empresas: Empresa[] = [];
  constructor() { }



  agregarEmpresa(empresa: Empresa) {
    
    this.empresas.push(empresa);
    this.codigo++;

  }

  removeEmpresa(empresa: Empresa) {
    const itemIndex = this.empresas.findIndex(temp => temp.id === empresa.id);

    if (itemIndex > -1) {

      this.empresas.splice(itemIndex, 1);
    } else {
      console.log('empresa no existe');
    }


  }



}