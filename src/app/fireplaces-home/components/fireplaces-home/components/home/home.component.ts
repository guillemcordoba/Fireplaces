import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, getHomeState } from './../../../../../reducers/index';
import { Component, OnInit } from '@angular/core';
import { FireplaceHome } from '../../../../../commons/models/home.model';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentFireplace$: Observable<FireplaceHome>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.currentFireplace$ = this.store.select(getHomeState).select(state => state.currentFireplace);
  }

}
