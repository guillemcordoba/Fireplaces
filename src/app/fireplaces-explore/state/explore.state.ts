import { Fireplace, Location } from './../../commons/models/fireplaces.model';

export interface ExploreState {
  // define state here
  fireplaces: Array<Fireplace>;
  currentLocation: Location;
}
