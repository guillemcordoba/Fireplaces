import * as fromRoot from './../../../reducers';
import { Fireplace, Coordinates, Relationship } from './../../../commons/models/fireplaces.model';
import { Observable } from 'rxjs/Observable';
import { DataPersistence } from '@nrwl/nx';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'fp-fireplaces-map',
  templateUrl: './fireplaces-map.component.html',
  styleUrls: ['./fireplaces-map.component.css']
})
export class FireplacesMapComponent implements OnInit {

  @Input() location: Coordinates;
  @Input() fireplaces: Fireplace[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openFireplace(fireplaceId: string): void {
    this.router.navigate(['/home', fireplaceId]);
  }

}
