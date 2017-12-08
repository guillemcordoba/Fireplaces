import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceToolbarComponent } from './place-toolbar.component';

describe('PlaceToolbarComponent', () => {
  let component: PlaceToolbarComponent;
  let fixture: ComponentFixture<PlaceToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
