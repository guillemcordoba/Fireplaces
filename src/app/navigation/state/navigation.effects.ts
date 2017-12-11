import { NavigationState } from './navigation.state';
import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class NavigationEffects {


  constructor(private d: DataPersistence<NavigationState>) {}
}
