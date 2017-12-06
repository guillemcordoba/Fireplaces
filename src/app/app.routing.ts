import { FireplacesMapComponent } from './fireplaces-map/map-component/fireplaces-map.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'fireplaces-map', component: FireplacesMapComponent },
  { path: '',
    redirectTo: '/fireplaces-map',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];
