import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFadeComponent } from './simple-fade.component';

describe('SimpleFadeComponent', () => {
  let component: SimpleFadeComponent;
  let fixture: ComponentFixture<SimpleFadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
