import { FireplacesService } from './../../fireplaces-commons/services/fireplaces.service';
import { FireplacesMapComponent } from './../map-component/fireplaces-map.component';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import { MapState } from './map.state';
import { FireplacesLoaded } from './map.actions';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class MapEffects {

  @Effect() loadFireplaces = this.d.navigation(FireplacesMapComponent, {
    run: (a: ActivatedRouteSnapshot, state: MapState) => {
      return this.fireplacesService.getFireplaces().map(fireplaces =>
        new FireplacesLoaded(fireplaces));
    },
    onError: (a: ActivatedRouteSnapshot, e: any) => {
      // we can log and error here and return null
      // we can also navigate back
      return null;
    }
  });

  constructor(private fireplacesService: FireplacesService, private d: DataPersistence<MapState>) {}
}
