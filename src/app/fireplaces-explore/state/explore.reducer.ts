import { exploreInitialState } from './explore.init';
import { ExploreState } from './explore.state';
import { ExploreAction, ExploreActionsTypes } from './explore.actions';
import { createFeatureSelector } from '@ngrx/store';

export function exploreReducer(state: ExploreState = exploreInitialState, action: ExploreAction): ExploreState {
  console.log('New store action:');
  console.log(action);
  console.log(state);
  switch (action.type) {
    case ExploreActionsTypes.fireplacesLoaded: {
      // Include the end fireplace location from every relationship present in the list to the
      // own fireplace object to simplify view complexity
      const fireplaces = action.payload
      .forEach(fireplace => fireplace.relationships
        .filter(r => action.payload.find(f => f.name === r.fireplace))
        .forEach(r => r.fireplaceLocation = action.payload.find(f => f.name === r.fireplace).location)
      );
      return Object.assign({}, state, {
        fireplaces: action.payload
      });
    }
    default: {
      return state;
    }
  }
}
