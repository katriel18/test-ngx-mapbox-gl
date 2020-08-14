import { Injectable } from '@angular/core';
import { Ubicacion } from '../models/ubicacion';

import {  HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceMapaService {

  
  ubicacion:Ubicacion=new Ubicacion();

  //direccion de plaza//-77.7446913,-9.140296
  private url=
  'https://api.mapbox.com/geocoding/v5/mapbox.places/-77.148134,-11.8528919.json?types=poi&access_token=pk.eyJ1Ijoia2F0cmllbCIsImEiOiJja2RjOXlrZTUxM3RsMnlxcmtwd3NrZWMwIn0.buu1mRI4DLdAUacSHR_2gw'



//walking//cycling//driving//driving-traffic
  private rutaURL=
  'https://api.mapbox.com/directions/v5/mapbox/driving/-77.1502506,-11.8748527;-77.1331274,-11.8765168?steps=true&voice_instructions=true&banner_instructions=true&voice_units=imperial&waypoint_names=Home;Work&access_token=pk.eyJ1Ijoia2F0cmllbCIsImEiOiJja2RjOXlrZTUxM3RsMnlxcmtwd3NrZWMwIn0.buu1mRI4DLdAUacSHR_2gw';
  
  constructor(private httpClient : HttpClient) { }

  //obtencion general de datos a partir de las coordenadas
  getPlace():Observable <any> {

    return this.httpClient.get<any>(this.url);
  }

  //obtencion de coordenadas de la ruta
  getpoints():Observable <any> {

    return this.httpClient.get<any>(this.rutaURL);
  }





  capturarUbicacion(data:any){
    
    this.ubicacion.longitud=data.result.geometry.coordinates[0];;
    this.ubicacion.latitud=data.result.geometry.coordinates[1];;
    
  }
}
