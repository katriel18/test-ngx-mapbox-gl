import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoia2F0cmllbCIsImEiOiJja2RjOXlrZTUxM3RsMnlxcmtwd3NrZWMwIn0.buu1mRI4DLdAUacSHR_2gw', // Optional, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'pk.eyJ1Ijoia2F0cmllbCIsImEiOiJja2RjOXlrZTUxM3RsMnlxcmtwd3NrZWMwIn0.buu1mRI4DLdAUacSHR_2gw' // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
