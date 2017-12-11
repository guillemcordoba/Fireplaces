import { Observable } from 'rxjs/Observable';
import { AppState } from './../../../reducers/index';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  menuOpened$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.menuOpened$ = this.store.select(fromRoot.getNavigationState).select(state => state.menuOpened);
  }

}
