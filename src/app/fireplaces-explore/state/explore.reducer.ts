import { Tag, Fireplace } from './../../commons/models/fireplaces.model';
import { exploreInitialState } from './explore.init';
import { ExploreState } from './explore.state';
import { ExploreAction, ExploreActionsTypes, SetFilter } from './explore.actions';
import { createFeatureSelector } from '@ngrx/store';

export function exploreReducer(state: ExploreState = exploreInitialState, action: ExploreAction): ExploreState {
  console.log('New store action:');
  console.log(action);
  console.log(state);
  switch (action.type) {
    case ExploreActionsTypes.fireplacesLoaded: {
      // Include the end fireplace location from every relationship present in the list to the
      // own fireplace object to simplify view complexity
      const fireplaces = (<Fireplace[]>action.payload);
      // Extract the tags information from the available fireplaces
      const tags: Set<string> = new Set([].concat(...fireplaces.map(fireplace => fireplace.tags)));
      return Object.assign({}, state, {
        fireplaces: fireplaces,
        tags: tags
      });
    }
    case ExploreActionsTypes.setFilter: {
      const filter = (<{ type: string, filter: string}>action.payload);
      return Object.assign({}, state, {
        currentFilters: {
          [filter.type]: filter.filter
        }
      });
    }
    default: {
      return state;
    }
  }
}
