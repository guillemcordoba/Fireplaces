import * as fromRoot from './../../reducers';
import { Fireplace, Location, Relationship } from './../../commons/models/fireplaces.model';
import { Observable } from 'rxjs/Observable';
import { DataPersistence } from '@nrwl/nx';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-fireplaces-map',
  templateUrl: './fireplaces-map.component.html',
  styleUrls: ['./fireplaces-map.component.css']
})
export class FireplacesMapComponent implements OnInit {

  @Input() location: Location;
  @Input() fireplaces: Fireplace[];

  constructor() { }

  ngOnInit() {
  }

}
