import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DataPersistence, NxModule } from '@nrwl/nx';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    // StoreModule.forFeature('map', mapReducer),
    // EffectsModule.forFeature([MapEffects]),
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
    MatListModule, FlexLayoutModule
  ],
  declarations: [ SidenavComponent, MenuToggleComponent ],
  providers: [],
  exports: [ SidenavComponent, MenuToggleComponent ]
})
export class NavigationModule { }
