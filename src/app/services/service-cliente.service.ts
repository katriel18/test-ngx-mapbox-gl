import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceClienteService {
  codigo:number=0;
  clientes: Cliente[] = [];
  constructor() { }



  agregarCliente(cliente: Cliente) {

    this.clientes.push(cliente);
    this.codigo++;
    

  }

  removeCliente(cliente: Cliente) {
    const itemIndex = this.clientes.findIndex(temp => temp.id === cliente.id);

    if (itemIndex > -1) {

      this.clientes.splice(itemIndex, 1);
    } else {
      console.log('empresa no existe');
    }

  }
}
