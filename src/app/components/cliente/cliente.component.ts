import { Empresa } from './../../models/empresa';
import { Component, OnInit } from '@angular/core';
import { ServiceMapaService } from '../../services/service-mapa.service';
import { Ubicacion } from '../../models/ubicacion';
import { ServiceClienteService } from 'src/app/services/service-cliente.service';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  constructor(
    private mapaService: ServiceMapaService,
    private clienteService: ServiceClienteService
  ) { }

  ngOnInit(): void {
  }


  crearCliente() {
    var clienteTemp: Cliente = new Cliente();
    var ubicacionTemp: Ubicacion = new Ubicacion();

    clienteTemp.id = this.clienteService.codigo;
    clienteTemp.nombre = 'cliente ' + this.clienteService.codigo;

    //ASIGNACION DE LA UBICACION DEL SERVICIO//NO ASIGNAR DIRECTAMENTE LA UBICACION SI NO SE ACTUALIZA TODAS LAS EMPRESAS
    ubicacionTemp.longitud = this.mapaService.ubicacion.longitud;
    ubicacionTemp.latitud = this.mapaService.ubicacion.latitud;

    clienteTemp.ubicacion = ubicacionTemp;

    this.clienteService.agregarCliente(clienteTemp);
    console.log(clienteTemp);

  }
}
