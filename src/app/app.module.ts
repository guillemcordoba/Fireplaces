import { MenuToggleComponent } from './navigation/components/menu-toggle/menu-toggle.component';
import { DataPersistence, NxModule } from '@nrwl/nx';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';

// Libraries
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// Apps modules
import { appRoutes } from './app.routing';

import { NavigationModule } from './navigation/navigation.module';
import { FireplacesHomeModule } from './fireplaces-home/fireplaces-home.module';
import { FireplacesExploreModule } from './fireplaces-explore/fireplaces-explore.module';

import { FireplacesCommonsModule } from './commons/fireplaces-commons.module';
import { FireplacesService } from './commons/services/fireplaces.service';

// Reducers
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    NxModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    NavigationModule,
    FireplacesCommonsModule,
    FireplacesExploreModule,
    FireplacesHomeModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    EffectsModule.forRoot([]),
    // Angular material
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [FireplacesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
