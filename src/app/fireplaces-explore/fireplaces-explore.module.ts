import { FilterPipe } from './filter-pipe/filter.pipe';
import { ExploreToolbarComponent } from './components/toolbar/explore-toolbar.component';
import { DataPersistence, NxModule } from '@nrwl/nx';
import { AgmCoreModule } from '@agm/core';
import { environment } from './../../environments/environment';
import { ExploreEffects } from './state/explore.effects';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireplacesMapComponent } from './components/map-component/fireplaces-map.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { exploreReducer } from './state/explore.reducer';
import { ExploreComponent } from './components/explore/explore.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonToggleModule,
  MatChipsModule
} from '@angular/material';
import { NavigationModule } from '../navigation/navigation.module';
import { ListToolbarComponent } from './components/list-toolbar/list-toolbar.component';
import { FireplacesCommonsModule } from '../commons/fireplaces-commons.module';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forFeature('explore', exploreReducer),
    EffectsModule.forFeature([ExploreEffects]),
    AgmCoreModule.forRoot(environment.googlemaps),
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    MatChipsModule,
    NavigationModule,
    FireplacesCommonsModule
  ],
  declarations: [
    FilterPipe,
    FireplacesMapComponent,
    ExploreComponent,
    ExploreToolbarComponent,
    ListToolbarComponent
  ],
  providers: []
})
export class FireplacesExploreModule {}
