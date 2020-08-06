import { Component,NgZone } from '@angular/core';

import { Marker } from 'mapbox-gl';
import { Result, Results } from 'ngx-mapbox-gl/lib/control/geocoder-control.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //marker
  coordinates: number[];
  color = '#3887be';
  estadoMarker:boolean=false;
  markerInicial:number[];
  long:number=-77.0824914;
  lat:number=-12.0587117;

  crearEliminarMarker() {
   if(!this.estadoMarker){
    this.estadoMarker=true;
    //ASIGNA LA POSICION DEL MARKER
    this.markerInicial=[this.long,this.lat];
    
  }else{
    this.estadoMarker=false;

  }
  }

  onGeocoder(resultado:any) {
    
   // console.log('resultado: ',resultado);
    console.log('resultado.result: ',resultado.result);
   // console.log('resultado.result.text: ',resultado.result.text);
   // console.log('resultado.result.text: ',resultado.result.properties.address);
    console.log('resultado.result.text: ',resultado.result.geometry.coordinates);
      //REASIGNA LAS POSICION DEL MARCADOR
      this.long=resultado.result.geometry.coordinates[0];
      this.lat=resultado.result.geometry.coordinates[1];
  
  }

  onGeolocate(position: Position) {
    console.log('coordenandas mias: ', position.coords);
    //REASIGNA LAS POSICION DEL MARCADOR
    this.long=position.coords.longitude;
    this.lat=position.coords.latitude;
    
  }

  
//marker
  onDragEnd(marker: Marker) {
    NgZone.assertInAngularZone();
    this.coordinates = marker.getLngLat().toArray();
    console.log('coordenadas marker:',  this.coordinates);
  }

}

/*

//INFO
[LONGITUD,LATITUD]

//UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS
[center]="[-77.0824914,-12.0587117]"

//LIMITE DEL PERU
[[Coordenadas del suroeste],[Coordenadas del noreste]]


*/
