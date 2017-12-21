import { Fireplace } from './fireplaces.model';

export interface FireplaceHome {
  fireplace: Fireplace;
  tabs: {
    home: HomeTab,
    custom: HomeTab[]
  };
}

export interface HomeTab {
  name: string;
  icon?: string;
}
