import { ExploreEffects } from './explore.effects';
import {TestBed} from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import {provideMockActions} from '@ngrx/effects/testing';
import {DataPersistence} from '@nrwl/nx';
import {readAll, hot} from '@nrwl/nx/testing';
import {of} from 'rxjs/observable/of';

describe('ExploreEffects', () => {
  let actions;
  let effects: ExploreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
      ],
      providers: [
        ExploreEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ],
    });

    effects = TestBed.get(ExploreEffects);
  });

  describe('someEffect', () => {
    it('should work', async () => {
      actions = hot('-a-|', {a: {type: 'LOAD_DATA'}});
      expect(await readAll(effects.loadData)).toEqual([
        {type: 'DATA_LOADED', payload: {}}
      ]);
    });
  });
});
