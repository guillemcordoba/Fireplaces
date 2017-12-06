import { DataPersistence, NxModule } from '@nrwl/nx';
import { AgmCoreModule } from '@agm/core';
import { environment } from './../../environments/environment';
import { MapEffects } from './state/map.effects';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireplacesMapComponent } from './map-component/fireplaces-map.component';

import { mapReducer } from './state/map.reducer';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forFeature('map', mapReducer),
    EffectsModule.forFeature([MapEffects]),
    AgmCoreModule.forRoot(environment.googlemaps),
  ],
  declarations: [ FireplacesMapComponent ],
  providers: []
})
export class FireplacesMapModule { }
