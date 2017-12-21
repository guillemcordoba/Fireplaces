import { HomeComponent } from './components/fireplaces-home/components/home/home.component';
import { HomeEffects } from './state/home.effects';
import { homeReducer } from './state/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NavigationModule } from './../navigation/navigation.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeToolbarComponent } from './components/toolbar/home-toolbar.component';
import { FireplacesCommonsModule } from '../commons/fireplaces-commons.module';
import { NxModule } from '@nrwl/nx';

@NgModule({
  imports: [
    CommonModule,
    FireplacesCommonsModule,
    NavigationModule,
    NxModule.forRoot(),
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects])
  ],
  declarations: [HomeToolbarComponent, HomeComponent]
})
export class FireplacesHomeModule {}
