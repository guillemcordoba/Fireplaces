import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapToolbarComponent } from './map-toolbar/map-toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PlaceToolbarComponent } from './place-toolbar/place-toolbar.component';
import { DataPersistence, NxModule } from '@nrwl/nx';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    // StoreModule.forFeature('map', mapReducer),
    // EffectsModule.forFeature([MapEffects]),
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
    MatListModule, FlexLayoutModule
  ],
  declarations: [ SidenavComponent, MapToolbarComponent, PlaceToolbarComponent ],
  providers: [],
  exports: [ SidenavComponent, MapToolbarComponent, PlaceToolbarComponent ]
})
export class NavigationModule { }
