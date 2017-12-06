import { AppState } from './index';
import { MapState } from './../fireplaces-map/state/map.state';
import { ActionReducerMap } from '@ngrx/store';

// Import all reducers from the app
import { mapReducer } from '../fireplaces-map/state/map.reducer';

export const reducers: ActionReducerMap<AppState> = {
  mapState: mapReducer
};

export interface AppState {
  mapState: MapState;
}


export const getMapState = (state: AppState) => state.mapState;
