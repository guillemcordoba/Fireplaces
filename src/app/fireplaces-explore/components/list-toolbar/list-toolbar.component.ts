import { Tag } from './../../../commons/models/fireplaces.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fp-list-toolbar',
  templateUrl: './list-toolbar.component.html',
  styleUrls: ['./list-toolbar.component.css']
})
export class ListToolbarComponent implements OnInit {

  @Input() tags: Set<string>;

  constructor() { }

  ngOnInit() {
  }

}
