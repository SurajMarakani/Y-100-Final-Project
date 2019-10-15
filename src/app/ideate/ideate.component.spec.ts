import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeateComponent } from './ideate.component';

describe('IdeateComponent', () => {
  let component: IdeateComponent;
  let fixture: ComponentFixture<IdeateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
