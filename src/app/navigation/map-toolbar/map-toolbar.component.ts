import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map-toolbar',
  templateUrl: 'map-toolbar.component.html',
  styles: [ 'map-toolbar.component.scss' ]
})
export class MapToolbarComponent {
  @Output() toggleMenu = new EventEmitter();
}
