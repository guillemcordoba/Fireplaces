import { Fireplace, Location } from './../../fireplaces-commons/models/fireplaces.model';

export interface MapState {
  // define state here
  fireplaces: Array<Fireplace>;
  currentLocation: Location;
}
