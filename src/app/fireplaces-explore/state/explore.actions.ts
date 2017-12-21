import { Fireplace } from './../../commons/models/fireplaces.model';
import { Action } from '@ngrx/store';

export enum ExploreActionsTypes {
  fireplacesLoaded = '[EXPLORE] Fireplaces loaded',
  setFilter = '[EXPLORE] Set filter to map'
}

export class FireplacesLoaded implements Action {
  type = ExploreActionsTypes.fireplacesLoaded;
  constructor(public payload: Array<Fireplace>) {}
}

export class SetFilter implements Action {
  type = ExploreActionsTypes.setFilter;
  constructor(public payload: { type: string, filter: string }) {}
}

export type ExploreAction = FireplacesLoaded | SetFilter;
