import { Component, OnInit ,NgZone} from '@angular/core';

import { Marker } from 'mapbox-gl';
import { Result, Results } from 'ngx-mapbox-gl/lib/control/geocoder-control.directive';
import { ServiceMapaService } from '../../services/service-mapa.service';
import { Ubicacion } from '../../models/ubicacion';

@Component({
  selector: 'app-mapa-empresa',
  templateUrl: './mapa-empresa.component.html',
  styleUrls: ['./mapa-empresa.component.css']
})
export class MapaEmpresaComponent implements OnInit {

   //marker
 coordinates: number[];
 color = '#3887be';
 estadoMarker:boolean=false;
 markerInicial:number[];
 long:number=-77.081366;
 lat:number=-12.058501;


  constructor(
   private mapaService:ServiceMapaService
  ) { }

  ngOnInit(): void {

     //ACTUALIZAR UBICACION EN EL SERVICIO DE MAPA
   this.mapaService.ubicacion.longitud=this.long;
   this.mapaService.ubicacion.latitud=this.lat;

  }


   
 crearEliminarMarker() {
  if(!this.estadoMarker){
   this.estadoMarker=true;
   //ASIGNA LA POSICION DEL MARKER
   this.markerInicial=[this.long,this.lat];


   //ACTUALIZAR UBICACION EN EL SERVICIO DE MAPA
   this.mapaService.ubicacion.longitud=this.long;
   this.mapaService.ubicacion.latitud=this.lat;
   
 }else{
   this.estadoMarker=false;

 }
 }

 onGeocoder(resultado:any) {
   
   console.log('resultado.result: ',resultado.result);
   console.log('resultado.result.text: ',resultado.result.geometry.coordinates);
     //REASIGNA LAS POSICION DEL MARCADOR
     this.long=resultado.result.geometry.coordinates[0];
     this.lat=resultado.result.geometry.coordinates[1];



 
     //ACTUALIZAR UBICACION EN EL SERVICIO DE MAPA
   this.mapaService.ubicacion.longitud=this.long;
   this.mapaService.ubicacion.latitud=this.lat;

 }

 onGeolocate(position: Position) {
   console.log('coordenandas mias: ', position.coords);
   //REASIGNA LAS POSICION DEL MARCADOR
   this.long=position.coords.longitude;
   this.lat=position.coords.latitude;



   //ACTUALIZAR UBICACION EN EL SERVICIO DE MAPA
   this.mapaService.ubicacion.longitud=this.long;
   this.mapaService.ubicacion.latitud=this.lat;
   
 }

 
//marker
 onDragEnd(marker: Marker) {
   NgZone.assertInAngularZone();
   this.coordinates = marker.getLngLat().toArray();
   console.log('coordenadas marker:',  this.coordinates);
   



  //ACTUALIZAR UBICACION EN EL SERVICIO DE MAPA
   this.mapaService.ubicacion.longitud=this.coordinates[0];
   this.mapaService.ubicacion.latitud=this.coordinates[1];

 }
 


}

