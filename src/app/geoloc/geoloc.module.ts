import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { GeolocPage } from './geoloc.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: GeolocPage
      }
    ])
  ],
  declarations: [GeolocPage]
})
export class GeolocPageModule {}

