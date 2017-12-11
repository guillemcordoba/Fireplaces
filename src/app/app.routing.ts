import { ExploreComponent } from './fireplaces-explore/explore/explore.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/explore',
    pathMatch: 'full'
  },
  { path: 'explore', component: ExploreComponent }
  // { path: '**', component: PageNotFoundComponent }
];
