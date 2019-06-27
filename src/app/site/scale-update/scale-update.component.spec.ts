import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaleUpdateComponent } from './scale-update.component';

describe('ScaleUpdateComponent', () => {
  let component: ScaleUpdateComponent;
  let fixture: ComponentFixture<ScaleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
