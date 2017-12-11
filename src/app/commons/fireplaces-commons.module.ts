import { environment } from './../../environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { MatChipsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatChipsModule
  ],
  declarations: [TagListComponent],
  exports: [ TagListComponent ]
})
export class FireplacesCommonsModule {}
