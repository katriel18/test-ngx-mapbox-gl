import { ServiceMapaService } from './../../services/service-mapa.service';
import { Component, OnInit } from '@angular/core';
import { ServiceEmpresaService } from '../../services/service-empresa.service';

@Component({
  selector: 'app-mapa-ruta',
  templateUrl: './mapa-ruta.component.html',
  styleUrls: ['./mapa-ruta.component.css']
})
export class MapaRutaComponent implements OnInit  {


  puntos:any;//puntos de inicio y final
  ver:boolean=false;

  puntosTotales:any;

  constructor(
    public mapaService:ServiceMapaService
  ) { }
  ngOnInit(): void {

   
  }


 
  //visualizaion
  obtenerPuntos(){
    this.ver=true;

   this.mapaService.getpoints().subscribe(

    

    data=>{
      
      console.log('ruta total: ',data);
      this.puntos=data.waypoints;
      console.log('punto I y F: ',this.puntos);
      
      //this.puntosTotales=data.routes[0].legs[0].steps;//puntos generales
      this.puntosTotales=data.routes[0].legs[0].steps[0].intersections;//puntos especificos
      console.log('Puntos totales: ',this.puntosTotales);
    
    })
}


cerrar(){
  this.ver=false;

}
}
