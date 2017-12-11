import { ToggleMenu, NavigationAction } from './navigation.actions';
import { NavigationEffects } from './navigation.effects';
import {TestBed} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {provideMockActions} from '@ngrx/effects/testing';
import {DataPersistence} from '@nrwl/nx';
import {readAll, hot} from '@nrwl/nx/testing';
import {of} from 'rxjs/observable/of';

describe('NavigationEffects', () => {
  let actions: NavigationAction;
  let effects: NavigationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
      providers: [
        NavigationEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ],
    });

    effects = TestBed.get(NavigationEffects);
  });

});
