import { Fireplace, Location, Tag } from './../../commons/models/fireplaces.model';
import { FireplaceHome } from '../../commons/models/home.model';

export interface HomeState {
  // define state here
  currentFireplace: FireplaceHome;
}
