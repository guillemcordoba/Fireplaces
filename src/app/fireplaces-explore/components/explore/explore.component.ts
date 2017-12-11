import * as fromRoot from './../../../reducers';
import { Fireplace, Location, Tag } from './../../../commons/models/fireplaces.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './../../../reducers/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  location$: Observable<Location>;
  fireplaces$: Observable<Fireplace[]>;
  tags$: Observable<Set<string>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.location$ = this.store.select(fromRoot.getExploreState).select(state => state.currentLocation);
    this.fireplaces$ = this.store.select(fromRoot.getExploreState).select(state => state.fireplaces);
    this.tags$ = this.store.select(fromRoot.getExploreState).select(state => state.tags);
  }

}
