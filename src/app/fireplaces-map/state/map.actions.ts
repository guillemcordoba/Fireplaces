import { Fireplace } from './../../fireplaces-commons/models/fireplaces.model';
import { Action } from '@ngrx/store';

export const MapActionsTypes = {
  fireplacesLoaded: '[MAP] Fireplaces loaded'
};

export class FireplacesLoaded implements Action {
  type = MapActionsTypes.fireplacesLoaded;
  constructor(public payload: Array<Fireplace>) {}
}

export type MapAction = FireplacesLoaded;

