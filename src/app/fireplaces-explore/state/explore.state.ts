import {
  Fireplace,
  Coordinates,
  Tag
} from './../../commons/models/fireplaces.model';

export interface ExploreState {
  // define state here
  fireplaces: Array<Fireplace>;
  tags: Set<string>;
  currentLocation: Coordinates;
  currentFilters: {
    tag: undefined,
    type: undefined
  };
}
