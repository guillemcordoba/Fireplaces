import { HomeActionsTypes, HomeAction } from './home.actions';
import { homeInitialState } from './home.init';
import { HomeState } from './home.state';

export function homeReducer(state: HomeState = homeInitialState, action: HomeAction): HomeState {
  console.log('New store action:');
  console.log(action);
  console.log(state);
  switch (action.type) {
    case HomeActionsTypes.fireplacesLoaded: {
      return Object.assign({}, state, {
        currentFireplace: action.payload
      });
    }
    default: {
      return state;
    }
  }
}
