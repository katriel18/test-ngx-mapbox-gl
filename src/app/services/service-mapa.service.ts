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

  constructor(private httpClient : HttpClient) { }

  //obtencion general de datos a paetir de las coordenadas
  getPlace():Observable <any> {

    return this.httpClient.get<any>(this.url);
  }

  capturarUbicacion(data:any){
    
    this.ubicacion.longitud=data.result.geometry.coordinates[0];;
    this.ubicacion.latitud=data.result.geometry.coordinates[1];;
    
  }
}
