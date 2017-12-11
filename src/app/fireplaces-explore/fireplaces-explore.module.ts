import { MenuToggleComponent } from './../navigation/components/menu-toggle/menu-toggle.component';
import { ExploreToolbarComponent } from './toolbar/explore-toolbar.component';
import { DataPersistence, NxModule } from '@nrwl/nx';
import { AgmCoreModule } from '@agm/core';
import { environment } from './../../environments/environment';
import { ExploreEffects } from './state/explore.effects';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireplacesMapComponent } from './map-component/fireplaces-map.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { exploreReducer } from './state/explore.reducer';
import { ExploreComponent } from './explore/explore.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forFeature('explore', exploreReducer),
    EffectsModule.forFeature([ExploreEffects]),
    AgmCoreModule.forRoot(environment.googlemaps),
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
    MatListModule,
    NavigationModule
  ],
  declarations: [ FireplacesMapComponent, ExploreComponent, ExploreToolbarComponent ],
  providers: []
})
export class FireplacesExploreModule { }
