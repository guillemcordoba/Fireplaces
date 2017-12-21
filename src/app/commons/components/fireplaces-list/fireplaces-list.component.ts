import { Fireplace } from './../../models/fireplaces.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fireplaces-list',
  templateUrl: './fireplaces-list.component.html',
  styleUrls: ['./fireplaces-list.component.css']
})
export class FireplacesListComponent implements OnInit {

  @Input() fireplaces: Array<Fireplace>;

  constructor() { }

  ngOnInit() {
  }

}
