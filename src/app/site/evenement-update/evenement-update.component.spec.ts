import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementUpdateComponent } from './evenement-update.component';

describe('EvenementUpdateComponent', () => {
  let component: EvenementUpdateComponent;
  let fixture: ComponentFixture<EvenementUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
