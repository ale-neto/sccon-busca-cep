import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: '',
      loadComponent: () =>
         import('./modules/home')
            .then(m => m.HomeComponent)
   },
      {
      path: 'address',
      loadComponent: () =>
         import('./modules/address')
            .then(m => m.AddressComponent)
   }
];
