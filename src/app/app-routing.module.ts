import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'first',
    loadChildren: () => import('./first/first.module').then(m => m.FirstPageModule)
  },
  {
    path: 'geoloc',
    loadChildren: () => import('./geoloc/geoloc.module').then(m => m.GeolocPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shoppingList/shoppingList.module').then(m => m.ShoppingListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
