import { LocationService } from './../../../commons/services/location.service';
import * as fromRoot from './../../../reducers';
import {
  Fireplace,
  Coordinates,
  Tag
} from './../../../commons/models/fireplaces.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './../../../reducers/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  location: Coordinates;
  fireplaces$: Observable<Fireplace[]>;
  tags$: Observable<Set<string>>;

  constructor(
    private store: Store<AppState>,
    private locationService: LocationService
  ) {
    locationService.getLocation().subscribe(location => {
      this.location = location.coords;
    });
  }

  ngOnInit() {
    this.fireplaces$ = this.store
      .select(fromRoot.getExploreState)
      .select(state => state.fireplaces);
    this.tags$ = this.store
      .select(fromRoot.getExploreState)
      .select(state => state.tags);
  }
}
