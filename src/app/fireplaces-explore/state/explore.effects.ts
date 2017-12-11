import { FireplacesService } from './../../commons/services/fireplaces.service';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import { ExploreState } from './explore.state';
import { FireplacesLoaded } from './explore.actions';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ExploreComponent } from '../components/explore/explore.component';

@Injectable()
export class ExploreEffects {

  @Effect() loadFireplaces = this.d.navigation(ExploreComponent, {
    run: (a: ActivatedRouteSnapshot, state: ExploreState) => {
      return this.fireplacesService.getFireplaces().map(fireplaces =>
        new FireplacesLoaded(fireplaces));
    },
    onError: (a: ActivatedRouteSnapshot, e: any) => {
      // we can log and error here and return null
      // we can also navigate back
      return null;
    }
  });

  constructor(private fireplacesService: FireplacesService, private d: DataPersistence<ExploreState>) {}
}
