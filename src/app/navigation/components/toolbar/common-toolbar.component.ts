import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../reducers/index';
import { ToggleMenu } from '../../state/navigation.actions';

export abstract class CommonToolbarComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  protected toggleMenu(): void {
    this.store.dispatch(new ToggleMenu());
  }

}
