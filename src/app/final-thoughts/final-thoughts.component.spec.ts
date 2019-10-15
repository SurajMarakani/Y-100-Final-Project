import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalThoughtsComponent } from './final-thoughts.component';

describe('FinalThoughtsComponent', () => {
  let component: FinalThoughtsComponent;
  let fixture: ComponentFixture<FinalThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
