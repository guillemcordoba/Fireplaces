import { HomeComponent } from './fireplaces-home/components/fireplaces-home/components/home/home.component';
import { ExploreComponent } from './fireplaces-explore/components/explore/explore.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/explore',
    pathMatch: 'full'
  },
  { path: 'explore', component: ExploreComponent },
  { path: 'home/:fireplaceId', component: HomeComponent }
  // { path: '**', component: PageNotFoundComponent }
];
