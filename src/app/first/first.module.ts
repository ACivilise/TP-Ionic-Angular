import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

import { FirstPage } from './first.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: FirstPage
      }
    ])
  ],
  declarations: [FirstPage]
})
export class FirstPageModule {}

