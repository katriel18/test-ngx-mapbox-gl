import { Injectable } from '@angular/core';
import { Ubicacion } from '../models/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceMapaService {

  
  ubicacion: Ubicacion;
  constructor() { }

  capturarUbicacion(data:any){
    
    this.ubicacion.longitud=data.result.geometry.coordinates[0];;
    this.ubicacion.latitud=data.result.geometry.coordinates[1];;
    
  }
}
