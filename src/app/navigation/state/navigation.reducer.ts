import { NavigationAction, NavigationActionsTypes } from './navigation.actions';
import { navigationInitialState } from './navigation.init';
import { NavigationState } from './navigation.state';
import { createFeatureSelector } from '@ngrx/store';

export function navigationReducer(state: NavigationState = navigationInitialState, action: NavigationAction): NavigationState {
  switch (action.type) {
    case NavigationActionsTypes.toggleMenu: {
      return Object.assign({}, state, {
        menuOpened: !state.menuOpened
      });
    }
    default: {
      return state;
    }
  }
}
