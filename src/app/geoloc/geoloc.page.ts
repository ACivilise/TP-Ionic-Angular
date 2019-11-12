import { Component } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geoloc',
  templateUrl: 'geoloc.page.html'
})
export class GeolocPage {  
  private latitude: number;
  private longitude: number;

  constructor(private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then(function(resp : Geoposition) {
      this.latitude = resp.coords.latitude as number;
      this.longitude = +resp.coords.longitude as number;
      this.increaseNumbers();
    }.bind(this)) // bind(this) permet de garder la référence au component courant
    .catch((error) => {
      console.log('Error getting location', error);
    });
  }
  
  private increaseNumbers() {
    setTimeout(function () {
      this.latitude = this.latitude + 1;
      this.longitude = this.longitude + 1;
      this.increaseNumbers();
    }.bind(this), 1000); // bind(this) permet de garder la référence au component courant
  }
}





