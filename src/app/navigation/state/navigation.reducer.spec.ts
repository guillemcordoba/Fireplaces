import { navigationReducer } from './navigation.reducer';
import { navigationInitialState } from './navigation.init';
import { ToggleMenu, NavigationActionsTypes } from './navigation.actions';
import { NavigationState } from './navigation.state';

describe('navigationReducer', () => {
  it('should work', () => {
    const state: NavigationState = {};
    const action: ToggleMenu = {type: NavigationActionsTypes.toggleMenu};
    const actual = navigationReducer(state, action);
    expect(actual).toEqual({});
  });
});
