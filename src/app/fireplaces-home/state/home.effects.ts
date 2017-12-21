import { FireplaceHome } from './../../commons/models/home.model';
import { HomeComponent } from './../components/fireplaces-home/components/home/home.component';
import { FireplacesService } from './../../commons/services/fireplaces.service';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import { HomeState } from './home.state';
import { FireplaceHomeLoaded } from './home.actions';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class HomeEffects {

  @Effect() loadFireplaceHome = this.d.navigation(HomeComponent, {
    run: (a: ActivatedRouteSnapshot, state: HomeState) => {
      return this.fireplacesService.getFireplacesHome(a.params['fireplaceId']).map(fireplaceHome =>
        new FireplaceHomeLoaded(fireplaceHome));
    },
    onError: (a: ActivatedRouteSnapshot, e: any) => {
      // we can log and error here and return null
      // we can also navigate back
      return null;
    }
  });

  constructor(private fireplacesService: FireplacesService, private d: DataPersistence<HomeState>) {}
}
