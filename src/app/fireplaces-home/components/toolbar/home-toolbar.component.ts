import { Component, OnInit, Input } from '@angular/core';
import { FireplaceHome } from '../../../commons/models/home.model';

@Component({
  selector: 'fp-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.css']
})
export class HomeToolbarComponent implements OnInit {

  @Input() fireplaceHome: FireplaceHome;

  constructor() { }

  ngOnInit() {
  }

}
