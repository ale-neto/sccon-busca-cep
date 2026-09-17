import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: '',
      loadComponent: () =>
         import('./pages/home')
            .then(m => m.HomeComponent)
   },
      {
      path: 'address',
      loadComponent: () =>
         import('./pages/address')
            .then(m => m.AddressComponent)
   }
];
