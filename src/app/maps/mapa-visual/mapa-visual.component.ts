import { Component } from '@angular/core';
import { ServiceEmpresaService } from '../../services/service-empresa.service';

@Component({
  selector: 'app-mapa-visual',
  templateUrl: './mapa-visual.component.html',
  styleUrls: ['./mapa-visual.component.css']
})
export class MapaVisualComponent {

  constructor(
    public empresaService:ServiceEmpresaService
  ) { }




 onGeocoder(resultado:any) {
   
  // console.log('resultado: ',resultado);
   console.log('resultado.result: ',resultado.result);
  // console.log('resultado.result.text: ',resultado.result.text);
  // console.log('resultado.result.text: ',resultado.result.properties.address);
   console.log('resultado.result.text: ',resultado.result.geometry.coordinates);

 
 }

 onGeolocate(position: Position) {
   console.log('coordenandas mias: ', position.coords);
  
 }


}
