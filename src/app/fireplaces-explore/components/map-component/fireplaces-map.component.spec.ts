import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireplacesMapComponent } from './fireplaces-map.component';

describe('FireplacesMapComponent', () => {
  let component: FireplacesMapComponent;
  let fixture: ComponentFixture<FireplacesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireplacesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireplacesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
