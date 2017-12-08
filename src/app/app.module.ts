import { MapEffects } from './fireplaces-map/state/map.effects';
import { DataPersistence, NxModule } from '@nrwl/nx';
import { FireplacesService } from './fireplaces-commons/services/fireplaces.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// Libraries
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// Apps modules
import { appRoutes } from './app.routing';

import { NavigationModule } from './navigation/navigation.module';
import { FireplacesMapModule } from './fireplaces-map/fireplaces-map.module';
import { FireplacesCommonsModule } from './fireplaces-commons/fireplaces-commons.module';

// Reducers
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { MapToolbarComponent } from './navigation/map-toolbar/map-toolbar.component';
import { PlaceToolbarComponent } from './navigation/place-toolbar/place-toolbar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    NavigationModule,
    FireplacesMapModule,
    FireplacesCommonsModule,
    StoreModule.forRoot({ ...reducers, routerReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    EffectsModule.forRoot([]),
    // Angular material
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
    FlexLayoutModule
  ],
  providers: [ FireplacesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
