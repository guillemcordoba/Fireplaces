import { Fireplace } from './../../commons/models/fireplaces.model';
import { Action } from '@ngrx/store';

export const ExploreActionsTypes = {
  fireplacesLoaded: '[EXPLORE] Fireplaces loaded'
};

export class FireplacesLoaded implements Action {
  type = ExploreActionsTypes.fireplacesLoaded;
  constructor(public payload: Array<Fireplace>) {}
}

export type ExploreAction = FireplacesLoaded;

