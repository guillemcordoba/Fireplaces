import { NavigationModule } from './../navigation/navigation.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeToolbarComponent } from './components/toolbar/home-toolbar.component';
import { FireplacesCommonsModule } from '../commons/fireplaces-commons.module';

@NgModule({
  imports: [CommonModule, FireplacesCommonsModule, NavigationModule],
  declarations: [HomeToolbarComponent]
})
export class FireplacesHomeModule {}
