import { NavigationState } from './../navigation/state/navigation.state';
import { navigationReducer } from './../navigation/state/navigation.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { AppState } from './index';
import { ExploreState } from './../fireplaces-explore/state/explore.state';
import { ActionReducerMap } from '@ngrx/store';

// Import all reducers from the app
import { exploreReducer } from '../fireplaces-explore/state/explore.reducer';

export const reducers: ActionReducerMap<AppState> = {
  navigationState: navigationReducer,
  exploreState: exploreReducer
};

export interface AppState {
  exploreState: ExploreState;
  navigationState: NavigationState;
}

export const getExploreState = (state: AppState) => state.exploreState;
export const getNavigationState = (state: AppState) => state.navigationState;
