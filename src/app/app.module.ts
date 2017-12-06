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

// Apps modules
import { appRoutes } from './app.routing';

import { FireplacesMapModule } from './fireplaces-map/fireplaces-map.module';
import { FireplacesCommonsModule } from './fireplaces-commons/fireplaces-commons.module';

// Reducers
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';

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
    FireplacesMapModule,
    FireplacesCommonsModule,
    StoreModule.forRoot({ ...reducers, routerReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    EffectsModule.forRoot([])
  ],
  providers: [ FireplacesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
