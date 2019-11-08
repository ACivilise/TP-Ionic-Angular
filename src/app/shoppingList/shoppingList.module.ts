import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { ShoppingListPage } from './shoppingList.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShoppingListPage
      }
    ])
  ],
  declarations: [ShoppingListPage],
  providers: []
})
export class ShoppingListPageModule { }

