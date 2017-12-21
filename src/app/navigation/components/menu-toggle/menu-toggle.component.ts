import { ToggleMenu } from './../../state/navigation.actions';
import { AppState } from './../../../reducers/index';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'fp-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.css']
})
export class MenuToggleComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.store.dispatch(new ToggleMenu());
  }

}
