import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDemoComponent } from './color-demo.component';

describe('ColorDemoComponent', () => {
  let component: ColorDemoComponent;
  let fixture: ComponentFixture<ColorDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorDemoComponent]
    });
    fixture = TestBed.createComponent(ColorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
