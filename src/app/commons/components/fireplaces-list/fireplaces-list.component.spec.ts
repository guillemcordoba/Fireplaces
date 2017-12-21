import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireplacesListComponent } from './fireplaces-list.component';

describe('FireplacesListComponent', () => {
  let component: FireplacesListComponent;
  let fixture: ComponentFixture<FireplacesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireplacesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireplacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
