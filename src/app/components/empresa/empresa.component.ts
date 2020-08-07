import { Empresa } from './../../models/empresa';
import { Component, OnInit } from '@angular/core';
import { ServiceMapaService } from '../../services/service-mapa.service';
import { ServiceEmpresaService } from '../../services/service-empresa.service';
import { Ubicacion } from '../../models/ubicacion';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(
    private mapaService:ServiceMapaService,
    private empresaService:ServiceEmpresaService
  ) { }

  ngOnInit(): void {
  }


  crearEmpresa()

  {
    var empresaTemp:Empresa=new Empresa();
    var ubicacionTemp:Ubicacion=new Ubicacion();

    empresaTemp.id=this.empresaService.codigo;
    empresaTemp.nombre='empresa '+this.empresaService.codigo;

   // ubicacionTemp=  this.mapaService.ubicacion;
//empresaTemp.ubicacion=ubicacionTemp;

ubicacionTemp.longitud=this.mapaService.ubicacion.longitud;
ubicacionTemp.latitud=this.mapaService.ubicacion.latitud;
empresaTemp.ubicacion=ubicacionTemp;

    this.empresaService.agregarEmpresa(empresaTemp);
    console.log(empresaTemp);

  }
}
