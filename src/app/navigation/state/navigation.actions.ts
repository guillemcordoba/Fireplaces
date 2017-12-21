import { Action } from '@ngrx/store';

export const NavigationActionsTypes = {
  toggleMenu: '[NAVIGATION] Menu toggle'
};

export class ToggleMenu implements Action {
  type = NavigationActionsTypes.toggleMenu;
  constructor() {}
}

export type NavigationAction = ToggleMenu;
