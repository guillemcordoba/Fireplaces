import { HomeState } from './../fireplaces-home/state/home.state';
import { NavigationState } from './../navigation/state/navigation.state';
import { navigationReducer } from './../navigation/state/navigation.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { AppState } from './index';
import { ExploreState } from './../fireplaces-explore/state/explore.state';
import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

// Import all reducers from the app
import { exploreReducer } from '../fireplaces-explore/state/explore.reducer';
import { homeReducer } from '../fireplaces-home/state/home.reducer';
import { RouterState, Params } from '@angular/router';

export const reducers: ActionReducerMap<AppState> = {
  exploreState: exploreReducer,
  homeState: homeReducer,
  navigationState: navigationReducer,
  routerReducer: routerReducer
};

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export interface AppState {
  exploreState: ExploreState;
  homeState: HomeState;
  navigationState: NavigationState;
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const getHomeState = (state: AppState) => state.homeState;
export const getExploreState = (state: AppState) => state.exploreState;
export const getNavigationState = (state: AppState) => state.navigationState;
