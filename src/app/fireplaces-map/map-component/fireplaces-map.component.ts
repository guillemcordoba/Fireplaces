import * as fromRoot from './../../reducers';
import { Fireplace, Location, Relationship } from './../../fireplaces-commons/models/fireplaces.model';
import { Observable } from 'rxjs/Observable';
import { DataPersistence } from '@nrwl/nx';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fireplaces-map',
  templateUrl: './fireplaces-map.component.html',
  styleUrls: ['./fireplaces-map.component.css']
})
export class FireplacesMapComponent implements OnInit {

  location$: Observable<Location>;
  fireplaces$: Observable<Fireplace[]>;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.location$ = this.store.select(fromRoot.getMapState).select(state => state.currentLocation);
    this.fireplaces$ = this.store.select(fromRoot.getMapState).select(state => state.fireplaces);
  }

}
