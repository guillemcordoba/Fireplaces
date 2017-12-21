import { Tag } from './../../models/fireplaces.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fp-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input() tags: Set<Tag>;

  constructor() { }

  ngOnInit() {
  }

}
