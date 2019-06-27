import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleFormComponent } from './scale-form.component';

describe('ScaleFormComponent', () => {
  let component: ScaleFormComponent;
  let fixture: ComponentFixture<ScaleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
