import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoAnimationComponent } from './no-animation.component';

describe('NoAnimationComponent', () => {
  let component: NoAnimationComponent;
  let fixture: ComponentFixture<NoAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
