import { mapInitialState } from './map.init';
import { MapState } from './map.state';
import { MapAction, MapActionsTypes } from './map.actions';
import { createFeatureSelector } from '@ngrx/store';

export function mapReducer(state: MapState = mapInitialState, action: MapAction): MapState {
  console.log('New store action:');
  console.log(action);
  console.log(state);
  switch (action.type) {
    case MapActionsTypes.fireplacesLoaded: {
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
