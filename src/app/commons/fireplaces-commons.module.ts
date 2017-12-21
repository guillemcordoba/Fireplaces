import { TranslateModule } from '@ngx-translate/core';
import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TagListComponent } from './components/tag-list/tag-list.component';
import {
  MatChipsModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { FireplacesListComponent } from './components/fireplaces-list/fireplaces-list.component';
import { BottomTabsComponent } from './components/bottom-tabs/bottom-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    TranslateModule
  ],
  declarations: [
    TagListComponent,
    FireplacesListComponent,
    BottomTabsComponent
  ],
  exports: [
    TagListComponent,
    FireplacesListComponent,
    BottomTabsComponent,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    TranslateModule
  ]
})
export class FireplacesCommonsModule {}
