import { Tag } from './../../../commons/models/fireplaces.model';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers/index';
import { SetFilter } from '../../state/explore.actions';

@Component({
  selector: 'fp-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.css']
})
export class ListToolbarComponent implements OnInit {

  @Input() tags: Set<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  applyFilter(type: string, $event) {
    this.store.dispatch(new SetFilter({type: type, filter: $event}));
  }

}
