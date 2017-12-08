import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() menuOpened: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleOpened() {
    this.menuOpened = !this.menuOpened;
  }

}
