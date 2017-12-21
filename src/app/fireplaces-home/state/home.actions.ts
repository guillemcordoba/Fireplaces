import { FireplaceHome } from './../../commons/models/home.model';
import { Fireplace } from './../../commons/models/fireplaces.model';
import { Action } from '@ngrx/store';

export const HomeActionsTypes = {
  fireplacesLoaded: '[HOME] Fireplace home loaded'
};

export class FireplaceHomeLoaded implements Action {
  type = HomeActionsTypes.fireplacesLoaded;
  constructor(public payload: FireplaceHome) {}
}

export type HomeAction = FireplaceHomeLoaded;
