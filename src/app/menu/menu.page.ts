import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { GeolocPage } from '../geoloc/geoloc.page';
import { FirstPage } from '../first/first.page';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.page.html'
})
export class MenuPage {
  constructor(public navCtrl: NavController) {
  }

  // private goToGeoloc()
  // {
  //   this.navCtrl.push(GeolocPage);
  // }
  
  // private goToFirstPage()
  // {    this.navCtrl.push(FirstPage, {nomParam1: "je suis un paramètre"});   


  // }
}
